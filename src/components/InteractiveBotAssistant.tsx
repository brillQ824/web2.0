'use client'
import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect, useRef } from 'react'

interface ChatMessage {
  id: number
  text: string
  sender: 'user' | 'bot'
  timestamp: Date
}

interface InteractiveBotAssistantProps {
  onChatUpdate?: (chatHistory: string) => void
}

const welcomeMessages = [
  "Cześć! Jestem asystentem AI brillQ. Mogę odpowiedzieć na pytania o nasze produkty, projekty, technologie i usługi.",
  "Zapytaj mnie o cokolwiek związanego z brillQ - od Agentic AI po wdrożenia w Twojej firmie!",
]

export default function InteractiveBotAssistant({ onChatUpdate }: InteractiveBotAssistantProps) {
  const [chatMessages, setChatMessages] = useState<ChatMessage[]>([
    {
      id: 0,
      text: welcomeMessages[0],
      sender: 'bot',
      timestamp: new Date(),
    },
  ])
  const [userInput, setUserInput] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const chatEndRef = useRef<HTMLDivElement>(null)
  const messageIdCounter = useRef(1)

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' })

    // Update parent component with chat history
    if (onChatUpdate && chatMessages.length > 1) {
      const chatHistory = chatMessages
        .map(msg => `${msg.sender === 'user' ? 'Klient' : 'AI'}: ${msg.text}`)
        .join('\n\n')
      onChatUpdate(chatHistory)
    }
  }, [chatMessages, onChatUpdate])

  const addBotMessage = (text: string) => {
    const newMessage: ChatMessage = {
      id: messageIdCounter.current++,
      text,
      sender: 'bot',
      timestamp: new Date(),
    }
    setChatMessages((prev) => [...prev, newMessage])
  }

  // Placeholder for RAG integration - will be replaced with actual API call
  const getBotResponseWithRAG = async (userMessage: string): Promise<string> => {
    const lowerMessage = userMessage.toLowerCase()

    // Temporary responses - to be replaced with RAG API
    if (lowerMessage.includes('produkt') || lowerMessage.includes('product')) {
      return "brillQ oferuje zaawansowane rozwiązania AI: Agentic AI (autonomiczne systemy decyzyjne), wdrożenia Large Language Models, systemy automatyzacji procesów biznesowych oraz własny Tech Core. Chcesz poznać szczegóły konkretnego produktu?"
    } else if (lowerMessage.includes('projekt') || lowerMessage.includes('project')) {
      return "Realizujemy projekty od strategii AI, przez badania R&D, po pełne wdrożenia systemów AI w firmach. Każdy projekt dostosowujemy do specyfiki biznesu klienta. Opowiedz mi o swoich potrzebach!"
    } else if (lowerMessage.includes('agentic')) {
      return "Agentic AI to autonomiczne systemy AI, które samodzielnie podejmują decyzje i wykonują zadania. W brillQ specjalizujemy się w budowie agentów AI dla różnych branż - od finansów po produkcję."
    } else if (lowerMessage.includes('llm') || lowerMessage.includes('language model')) {
      return "Pracujemy z najnowszymi Large Language Models (Claude, GPT-4, Llama). Tworzymy aplikacje wykorzystujące LLM do: obsługi klienta, analizy dokumentów, generowania treści i automatyzacji komunikacji."
    } else if (lowerMessage.includes('wdroż') || lowerMessage.includes('implement')) {
      return "Proces wdrożenia AI w brillQ: 1) Audyt i strategia AI, 2) Proof of Concept, 3) Rozwój systemu, 4) Integracja, 5) Szkolenia zespołu. Standardowe wdrożenie trwa 4-8 tygodni. Chcesz poznać szczegóły?"
    } else if (lowerMessage.includes('cena') || lowerMessage.includes('koszt') || lowerMessage.includes('ile kosztuje')) {
      return "Ceny zależą od skali projektu. Audyt AI: od 15k PLN, Proof of Concept: 25-50k PLN, Pełne wdrożenie: od 100k PLN. Wypełnij formularz kontaktowy, a przygotujemy spersonalizowaną ofertę dla Twojego projektu."
    } else if (lowerMessage.includes('zespół') || lowerMessage.includes('team')) {
      return "Zespół brillQ to eksperci AI, ML engineers, architekci systemów i konsultanci biznesowi. Pracujemy w modelu Liquid Enterprise - elastyczna struktura pozwala nam działać w 9 obszarach jednocześnie."
    } else if (lowerMessage.includes('technolog') || lowerMessage.includes('tech')) {
      return "Używamy: Python, TypeScript/Next.js, Claude/GPT-4 API, Vector Databases (Pinecone, Weaviate), LangChain, Ollama dla local LLM. Wszystko dostosowane do potrzeb projektu."
    } else if (lowerMessage.includes('consult') || lowerMessage.includes('doradztwo')) {
      return "Oferujemy doradztwo strategiczne w AI: audyty technologiczne, mapowanie procesów do automatyzacji, wybór technologii AI, budowanie AI Advisory Board dla firm."
    } else if (lowerMessage.includes('szkol') || lowerMessage.includes('train')) {
      return "Prowadzimy szkolenia z AI dla zespołów: podstawy LLM i prompt engineering, Agentic AI w praktyce, wdrażanie AI w firmie, bezpieczeństwo systemów AI."
    } else if (lowerMessage.includes('contact') || lowerMessage.includes('kontakt')) {
      return "Skontaktuj się z nami: Email: hello@brillQ.today, Tel: +48 662 466 446. Lub wypełnij formularz kontaktowy - odpowiemy w 24h!"
    } else {
      return "To świetne pytanie! Mogę opowiedzieć Ci więcej o naszych produktach, projektach, technologiach, wdrożeniach AI, zespole czy procesie współpracy. O co chcesz zapytać? Lub wypełnij formularz kontaktowy, a nasz zespół odpowie szczegółowo na wszystkie pytania."
    }
  }

  const handleSendMessage = async () => {
    if (!userInput.trim()) return

    const userMessage: ChatMessage = {
      id: messageIdCounter.current++,
      text: userInput,
      sender: 'user',
      timestamp: new Date(),
    }
    setChatMessages((prev) => [...prev, userMessage])
    const currentInput = userInput
    setUserInput('')
    setIsTyping(true)

    // Simulate API call delay
    setTimeout(async () => {
      const botReply = await getBotResponseWithRAG(currentInput)
      setIsTyping(false)
      addBotMessage(botReply)
    }, 1000 + Math.random() * 1500)
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSendMessage()
    }
  }

  const suggestedQuestions = [
    "Jakie produkty oferuje brillQ?",
    "Opowiedz o Agentic AI",
    "Jak wygląda proces wdrożenia?",
    "Jakie technologie używacie?",
  ]

  const handleSuggestionClick = (question: string) => {
    setUserInput(question)
  }

  return (
    <div className="w-full max-w-4xl mx-auto" style={{ maxWidth: '100%' }}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-gradient-to-br from-gray-900/95 via-black/95 to-gray-900/95 backdrop-blur-sm rounded-3xl border-2 border-primary/30 overflow-hidden"
        style={{
          boxShadow: '0 20px 60px rgba(0, 0, 0, 0.5), 0 0 60px rgba(178, 158, 82, 0.15)',
          maxWidth: '100%',
        }}
      >
        {/* Chat Header */}
        <div className="bg-gradient-to-r from-primary/20 via-primary/10 to-primary/20 p-6 border-b border-primary/20">
          <div className="flex items-center gap-4">
            <div className="relative">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/30 to-primary/10 flex items-center justify-center border-2 border-primary/40">
                <svg className="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
                </svg>
              </div>
              <motion.div
                className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-green-500 border-2 border-black"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.8, 1, 0.8],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                }}
              />
            </div>
            <div className="flex-1">
              <h3 className="text-white font-semibold text-xl mb-1">brillQ AI Assistant</h3>
              <p className="text-gray-400 text-sm">Ekspert ds. produktów, projektów i wdrożeń AI</p>
            </div>
            <div className="hidden sm:flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-xl border border-primary/30">
              <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              <span className="text-primary text-sm font-medium">Online</span>
            </div>
          </div>
        </div>

        {/* Chat Messages */}
        <div
          className="p-6 space-y-4 overflow-y-auto"
          style={{
            height: '500px',
            scrollbarWidth: 'thin',
            scrollbarColor: 'rgba(178, 158, 82, 0.3) transparent',
          }}
        >
          <AnimatePresence mode="popLayout">
            {chatMessages.map((message) => (
              <motion.div
                key={message.id}
                initial={{ opacity: 0, y: 10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div className={`flex gap-3 max-w-[85%] ${message.sender === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
                  {message.sender === 'bot' && (
                    <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center border border-primary/40">
                      <span className="text-primary text-xs font-bold">AI</span>
                    </div>
                  )}
                  <div
                    className={`rounded-2xl px-5 py-3 ${
                      message.sender === 'user'
                        ? 'bg-gradient-to-br from-primary/30 to-primary/20 border-2 border-primary/50 text-white'
                        : 'bg-white/10 border border-white/20 text-gray-100'
                    }`}
                    style={{
                      fontSize: '15px',
                      lineHeight: 1.6,
                    }}
                  >
                    {message.text}
                  </div>
                </div>
              </motion.div>
            ))}

            {isTyping && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex justify-start"
              >
                <div className="flex gap-3 max-w-[85%]">
                  <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center border border-primary/40">
                    <span className="text-primary text-xs font-bold">AI</span>
                  </div>
                  <div className="bg-white/10 border border-white/20 rounded-2xl px-5 py-4 flex gap-2">
                    {[...Array(3)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="w-2.5 h-2.5 bg-primary rounded-full"
                        animate={{
                          scale: [1, 1.4, 1],
                          opacity: [0.5, 1, 0.5],
                        }}
                        transition={{
                          duration: 1,
                          repeat: Infinity,
                          delay: i * 0.2,
                        }}
                      />
                    ))}
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
          <div ref={chatEndRef} />

          {/* Suggested Questions - show only at start */}
          {chatMessages.length === 1 && !isTyping && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="pt-4"
            >
              <p className="text-gray-300 text-xs mb-3 text-center">Popularne pytania:</p>
              <div className="flex flex-wrap gap-2 justify-center">
                {suggestedQuestions.map((question, index) => (
                  <motion.button
                    key={index}
                    onClick={() => handleSuggestionClick(question)}
                    className="bg-white/5 hover:bg-primary/20 border border-white/20 hover:border-primary/40 text-gray-300 hover:text-white px-4 py-2 rounded-xl text-sm transition-all"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {question}
                  </motion.button>
                ))}
              </div>
            </motion.div>
          )}
        </div>

        {/* Chat Input */}
        <div className="p-6 bg-gradient-to-t from-black/80 to-transparent border-t border-primary/20">
          <div className="flex gap-3">
            <input
              type="text"
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Zapytaj o produkty, projekty, technologie..."
              className="flex-1 bg-white/5 border-2 border-white/20 focus:border-primary/60 rounded-2xl px-5 py-3.5 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
              style={{ fontSize: '15px' }}
            />
            <motion.button
              onClick={handleSendMessage}
              className="bg-gradient-to-br from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 text-black font-semibold rounded-2xl px-6 py-3.5 flex items-center justify-center transition-all shadow-lg shadow-primary/20"
              whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(178, 158, 82, 0.4)' }}
              whileTap={{ scale: 0.95 }}
              disabled={!userInput.trim()}
              style={{
                opacity: userInput.trim() ? 1 : 0.5,
                cursor: userInput.trim() ? 'pointer' : 'not-allowed',
              }}
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
              </svg>
            </motion.button>
          </div>
          <p className="text-gray-300 text-xs mt-3 text-center">
            Asystent AI odpowiada na podstawie wiedzy o brillQ. Dla szczegółowych ofert{' '}
            <span className="text-primary">wypełnij formularz kontaktowy →</span>
          </p>
        </div>
      </motion.div>
    </div>
  )
}
