"use client";
import { useState, useRef, useEffect } from "react";

interface Message {
  role: "user" | "assistant";
  text: string;
}

export default function ChatWidget() {
  const [messages, setMessages] = useState<Message[]>([
    { role: "assistant", text: "Hey! 👋 I can help with pricing, packages, or bookings. What are you looking to get done today?" }
  ]);
  const [input, setInput] = useState("");
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => bottomRef.current?.scrollIntoView({ behavior: "smooth" }), [messages]);

  const sendMessage = async () => {
    if (!input.trim()) return;
    const userMessage = { role: "user", text: input };
    setMessages(prev => [...prev, userMessage]);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: input }),
      });
      const data = await res.json();
      setMessages(prev => [...prev, { role: "assistant", text: data.reply }]);
    } catch (err) {
      setMessages(prev => [...prev, { role: "assistant", text: "Oops! Something went wrong." }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-6 right-6 bg-blue-600 text-white w-14 h-14 rounded-full shadow-lg"
      >
        💬
      </button>

      {/* Chat Window */}
      {open && (
        <div className="fixed bottom-20 right-6 w-80 max-w-full h-96 bg-white shadow-lg rounded-lg flex flex-col overflow-hidden">
          {/* Header */}
          <div className="bg-blue-600 text-white p-2 font-bold flex justify-between items-center">
            Delta Detailing
            <button onClick={() => setOpen(false)}>✕</button>
          </div>

          {/* Messages */}
          <div className="flex-1 p-2 overflow-y-auto">
            {messages.map((m, idx) => (
              <div
                key={idx}
                className={`my-1 p-2 rounded-lg ${m.role === "user" ? "bg-blue-600 text-white self-end" : "bg-gray-200 text-black self-start"}`}
              >
                {m.text}
              </div>
            ))}
            {loading && <div className="text-gray-500">Delta Detailing is typing...</div>}
            <div ref={bottomRef} />
          </div>

          {/* Input */}
          <div className="p-2 flex border-t">
            <input
              className="flex-1 border rounded p-1"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
              placeholder="Type your message..."
            />
            <button onClick={sendMessage} className="ml-2 bg-blue-600 text-white px-3 rounded">Send</button>
          </div>
        </div>
      )}
    </>
  );
}
