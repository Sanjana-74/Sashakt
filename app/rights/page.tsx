"use client"
import { useState } from "react"
import { RightsQuiz } from "@/components/rights-quiz"

interface Right {
  title: string
  description: string
  icon: string
  youtubeUrl: string
}

const rights: Right[] = [
  {
    title: "Right to Survival",
    description:
      "Every child has the right to life and to access the essential services needed for survival, including food, healthcare, and shelter.",
    icon: "🛡️",
    // New link: A right to survival | UNICEF South Sudan
    youtubeUrl: "http://www.youtube.com/watch?v=Hh0EMFRmypE",
  },
  {
    title: "Right to Development",
    description:
      "Children have the right to develop to their full potential, including physical, mental, spiritual, moral, and social development.",
    icon: "🌱",
    // New link: Convention on the Rights of the Child Explainer | UNICEF Canada
    youtubeUrl: "http://www.youtube.com/watch?v=WO_yAe1RqXk",
  },
  {
    title: "Right to Protection",
    description:
      "Every child deserves protection from violence, abuse, neglect, exploitation, and all forms of harmful treatment.",
    icon: "🔒",
    // New link: Protection from abuse | Cartoons for child rights | UNICEF
    youtubeUrl: "http://www.youtube.com/watch?v=QGLnnk46UQ0",
  },
  {
    title: "Right to Participation",
    description:
      "Children have the right to express their views, be heard, and participate in decisions that affect them.",
    icon: "🗣️",
    // New link: Right to Participation | Pratham Open School English
    youtubeUrl: "http://www.youtube.com/watch?v=_2S63tSJkLc",
  },
  {
    title: "Right to Education",
    description:
      "Every child has the right to quality education that develops their personality, talents, and mental and physical abilities.",
    icon: "📚",
    // New link: Rights of the Child Segment 1 - What are Childrens Rights | Global Teacher Prize
    youtubeUrl: "http://www.youtube.com/watch?v=COjVj9czgrY",
  },
  {
    title: "Right to Health",
    description:
      "Children have the right to the highest attainable standard of health, including preventive care and medical treatment.",
    icon: "💚",
    // New link: A Child's Right to Health Part 1 | World Vision EU Representation
    youtubeUrl: "http://www.youtube.com/watch?v=c9Qv4VIZb_M",
  },
  {
    title: "Right to Family",
    description:
      "Every child has the right to know their parents, be cared for by them, and maintain family relationships.",
    icon: "👨‍👩‍👧‍👦",
    // New link: RIGHTS and RESPONSIBILITIES of Children 👧🏻👦🏻📖 | Smile and Learn
    youtubeUrl: "http://www.youtube.com/watch?v=TafvHxXFzUM",
  },
  {
    title: "Right to Expression",
    description:
      "Children have the right to freedom of thought, conscience, and religion, and the right to express themselves freely.",
    icon: "💭",
    // New link: Right to Self Expression | Cartoons for Child Rights | UNICEF
    youtubeUrl: "http://www.youtube.com/watch?v=mV8L9xC0ZYA",
  },
]

interface SelectedRight extends Right {
  index: number
}

export default function Rights() {
  const [selectedRight, setSelectedRight] = useState<SelectedRight | null>(null)
  const [showQuiz, setShowQuiz] = useState(false)

  const rightsKeyMap: Record<number, string> = {
    0: "survival",
    1: "development",
    2: "protection",
    3: "participation",
    4: "education",
    5: "health",
    6: "family",
    7: "expression",
  }

  return (
    <main className="min-h-screen flex flex-col">
      <div className="flex-1 hero-background py-12 sm:py-20 px-4 sm:px-6 flex items-center justify-center">
        <div className="w-full max-w-5xl mx-auto">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 sm:mb-12 text-center drop-shadow-lg">
            Children's Rights
          </h1>

          <div className="bg-white/90 dark:bg-gray-900/90 backdrop-blur rounded-2xl sm:rounded-3xl p-6 sm:p-8 mb-8 sm:mb-12 shadow-lg dark:shadow-2xl">
            <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300 leading-relaxed text-center">
              Every child has fundamental rights that must be protected and respected. Click on any right below to learn
              more about what it means and why it matters.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {rights.map((right, index) => (
              <div
                key={index}
                className="rights-card bg-gradient-to-br from-blue-400 to-blue-600 hover:from-blue-500 hover:to-blue-700 rounded-xl sm:rounded-2xl p-5 sm:p-6 shadow-md hover:shadow-xl active:scale-95 transition-all cursor-pointer"
              >
                <div
                  onClick={() => {
                    setSelectedRight({ ...right, index })
                    setShowQuiz(false)
                  }}
                  className="mb-3 hover:scale-105 transition-transform duration-300"
                >
                  <div className="text-3xl sm:text-4xl mb-3 animate-bounce hover:animate-pulse">{right.icon}</div>
                  <h3 className="font-bold text-white text-sm sm:text-base line-clamp-2">{right.title}</h3>
                </div>
                <button
                  onClick={(e) => {
                    e.stopPropagation()
                    window.open(right.youtubeUrl, "_blank")
                  }}
                  className="w-full mt-4 bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-3 rounded-lg text-xs sm:text-sm transition-colors flex items-center justify-center gap-2 btn-hover active:scale-95"
                  aria-label={`Watch video about ${right.title}`}
                >
                  <span>▶</span>
                  <span>Learn More</span>
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {selectedRight && (
        <div
          className="fixed inset-0 bg-black/50 dark:bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4 animate-in fade-in"
          onClick={() => setSelectedRight(null)}
        >
          <div
            className="bg-white dark:bg-gray-900 rounded-2xl shadow-2xl dark:shadow-3xl max-w-md w-full p-6 sm:p-8 max-h-[90vh] overflow-y-auto animate-in zoom-in border-2 border-gray-200 dark:border-gray-800"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedRight(null)}
              className="absolute top-4 right-4 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 text-2xl leading-none transition-colors hover:scale-110 active:scale-95"
              aria-label="Close dialog"
            >
              ×
            </button>

            <div className="flex gap-2 mb-6 border-b-2 border-gray-200 dark:border-gray-800">
              <button
                onClick={() => setShowQuiz(false)}
                className={`px-4 py-2 font-semibold border-b-2 transition-all duration-300 text-sm sm:text-base hover:scale-105 transform ${
                  !showQuiz
                    ? "border-blue-600 text-blue-600 dark:text-blue-400 dark:border-blue-400"
                    : "border-transparent text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-300"
                }`}
              >
                Learn
              </button>
              <button
                onClick={() => setShowQuiz(true)}
                className={`px-4 py-2 font-semibold border-b-2 transition-all duration-300 text-sm sm:text-base hover:scale-105 transform ${
                  showQuiz
                    ? "border-yellow-500 text-yellow-600 dark:text-yellow-400 dark:border-yellow-400"
                    : "border-transparent text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-300"
                }`}
              >
                Quiz
              </button>
            </div>

            {showQuiz ? (
              <RightsQuiz rightKey={rightsKeyMap[selectedRight.index]} />
            ) : (
              <>
                <div className="flex items-start gap-3 mb-4">
                  <span className="text-4xl sm:text-5xl">{selectedRight.icon}</span>
                  <div>
                    <h2 className="text-xl sm:text-2xl font-bold text-gray-800 dark:text-white">
                      {selectedRight.title}
                    </h2>
                    <div className="text-xs sm:text-sm text-blue-600 dark:text-blue-400 font-semibold mt-1">
                      Right #{selectedRight.index + 1} of {rights.length}
                    </div>
                  </div>
                </div>

                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6 text-sm sm:text-base">
                  {selectedRight.description}
                </p>

                <div className="bg-blue-50 dark:bg-blue-900/30 rounded-lg p-4 mb-6 border-l-4 border-blue-500">
                  <p className="text-gray-700 dark:text-gray-300 text-xs sm:text-sm">
                    <strong>Why it matters:</strong> This right ensures that every child is treated with dignity and has
                    the opportunity to grow, learn, and thrive in a safe and supportive environment.
                  </p>
                </div>

                <div className="flex gap-3">
                  <button
                    onClick={() => setSelectedRight(null)}
                    className="flex-1 btn-hover bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700 text-gray-800 dark:text-white font-semibold py-2 sm:py-3 px-4 rounded-lg text-sm sm:text-base"
                  >
                    Close
                  </button>
                  <button
                    onClick={() => window.open(selectedRight.youtubeUrl, "_blank")}
                    className="flex-1 btn-hover bg-red-500 hover:bg-red-600 dark:bg-red-600 dark:hover:bg-red-700 text-white font-semibold py-2 sm:py-3 px-4 rounded-lg text-sm sm:text-base flex items-center justify-center gap-2"
                  >
                    <span>▶</span>
                    <span>Watch</span>
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </main>
  )
}
