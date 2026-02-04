"use client";
import { useState, useRef, useEffect } from "react";

// Explicit Message type
interface Message {
  role: "user" | "assistant";
  text: string;
  type?: "text" | "cta"; // optional, used for booking CTAs
}

export default function ChatWidget() {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      text: "Hey! 👋 I can help with pricing, packages, or bookings. What are you looking to get done today?",
      type: "text",
    },
  ]);
  const [input, setInput] = useState("");
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => bottomRef.current?.scrollIntoView({ behavior: "smooth" }), [messages]);

  // Quick replies for first message
  const quickReplies = ["Pricing", "Packages", "Book a detail"];

  const sendMessage = async (msg?: string) => {
    const text = msg || input;
    if (!text.trim()) return;

    // Create a typed user message
    const userMessage: Message = { role: "user", text, type: "text" };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: text }),
      });
      const data = await res.json();

      // Typed assistant message
      const assistantMessage: Message = { role: "assistant", text: data.reply, type: "text" };

      const updatedMessages: Message[] = [...messages, userMessage, assistantMessage];

      // Check if user intent shows booking interest
      const bookingKeywords = ["book", "booking", "quote", "schedule"];
      const triggerBooking = bookingKeywords.some((kw) => text.toLowerCase().includes(kw));

      if (triggerBooking) {
        const ctaMessage: Message = {
          role: "assistant",
          text: "I can help you book a service or get a quick quote. Which would you like?",
          type: "cta",
        };
        updatedMessages.push(ctaMessage);
      }

      setMessages(updatedMessages);
    } catch (err) {
      const errorMessage: Message = {
        role: "assistant",
        text: "Oops! Something went wrong.",
        type: "text",
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-6 right-6 bg-blue-600 text-white w-14 h-14 rounded-full shadow-lg flex items-center justify-center text-2xl z-50"
        title="Chat with us"
      >
        💬
      </button>

      {/* Chat Window */}
      {open && (
        <div className="fixed bottom-20 right-6 w-80 max-w-full h-96 bg-white shadow-lg rounded-lg flex flex-col overflow-hidden z-50">
          {/* Header */}
          <div className="bg-blue-600 text-white p-2 font-bold flex justify-between items-center">
            Delta Detailing
            <button onClick={() => setOpen(false)}>✕</button>
          </div>

          {/* Messages */}
          <div className="flex-1 p-2 overflow-y-auto flex flex-col space-y-1">
            {messages.map((m, idx) => (
              <div
                key={idx}
                className={`p-2 rounded-lg max-w-[80%] ${
                  m.role === "user"
                    ? "bg-blue-600 text-white self-end"
                    : "bg-gray-200 text-black self-start"
                }`}
              >
                {m.text}

                {/* CTA buttons */}
                {m.type === "cta" && (
                  <div className="mt-2 flex flex-col space-y-1">
                    <a
                      href="/booking"
                      target="_blank"
                      className="bg-green-600 text-white text-center rounded py-1 px-2"
                    >
                      📅 Book Now
                    </a>
                    <a
                      href="/contact"
                      target="_blank"
                      className="bg-gray-600 text-white text-center rounded py-1 px-2"
                    >
                      📩 Get a Quote
                    </a>
                  </div>
                )}
              </div>
            ))}

            {/* Quick replies (only under first message) */}
            {messages.length === 1 && (
              <div className="flex space-x-2 mt-2 flex-wrap">
                {quickReplies.map((qr) => (
                  <button
                    key={qr}
                    onClick={() => sendMessage(qr)}
                    className="bg-gray-300 px-2 py-1 rounded text-sm"
                  >
                    {qr}
                  </button>
                ))}
              </div>
            )}

            {loading && <div className="text-gray-500 mt-1">Delta Detailing is typing...</div>}
            <div ref={bottomRef} />
          </div>

          {/* Input */}
          <div className="p-2 flex border-t">
            <input
              className="flex-1 border rounded p-1 text-black"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
              placeholder="Type your message..."
            />
            <button
              onClick={() => sendMessage()}
              className="ml-2 bg-blue-600 text-white px-3 rounded"
            >
              Send
            </button>
          </div>
        </div>
      )}
    </>
  );
}
