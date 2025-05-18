import { motion } from "motion/react"
import type { FC } from "react"

export const App: FC = () => {
  return (
    <div className="w-full p-5 flex flex-col max-w-xl gap-5 items-center  text-[#f4f4f4]">
      <motion.div
        className="flex  py-5 flex-col gap-3"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
      >
        <div className="text-center">
          <motion.span
            className="text-5xl inline-block mr-3"
            animate={{ scale: [1, 1.3, 1] }}
            transition={{
              duration: 1,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            🩷
          </motion.span>
          <span className="text-5xl font-bold">Машенька!</span>
          <motion.span
            className="text-5xl inline-block ml-3"
            animate={{ scale: [1, 1.3, 1] }}
            transition={{
              duration: 1,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            🩷
          </motion.span>
        </div>
        <span className="text-xl text-center">
          Это тебе открыточка <br /> Я тебя люблю... 👉👈
        </span>
      </motion.div>

      <div className="relative">
        <img className="rounded-xl" src="/masha.jpg" />
        <motion.img
          animate={{ rotate: [1, 5, 1] }}
          transition={{
            duration: 1,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute rounded-xl bottom-5 left-5 w-24 aspect-square object-cover"
          src="/niko_1.webp"
        />
        <motion.img
          animate={{ rotate: [1, 5, 1] }}
          transition={{
            duration: 1,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute rounded-xl bottom-5 right-5 w-24 aspect-square object-cover"
          src="/niko_2.webp"
        />
        <motion.img
          animate={{ rotate: [1, 5, 1] }}
          transition={{
            duration: 1,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute rounded-xl top-5 left-5 w-24 aspect-square object-cover"
          src="/niko_3.jpeg"
        />
        <motion.img
          animate={{ rotate: [1, 5, 1] }}
          transition={{
            duration: 1,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute rounded-xl top-5 right-5 w-24 aspect-square object-cover"
          src="/niko_4.webp"
        />
      </div>
    </div>
  )
}
