import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Icon } from "@iconify/react"

type Dropdown = {
    title: string
    items: string[]
    x: number
    y: number
}

export default function App() {
    const [dropdown, setDropdown] = useState<Dropdown | null>(null)

    useEffect(() => {
        const handleClick = () => {
            setDropdown(null)
        }

        document.addEventListener("click", handleClick)

        return () => {
            document.removeEventListener("click", handleClick)
        }
    }, [])

    function openDropdown({
                              title,
                              items,
                              x,
                              y,
                              onSelect,
                              onClose
                          }: {
        title: string
        items: string[]
        x: number
        y: number
        onSelect: (item: string, index: number) => void
        onClose: () => void
    }) {
        return (
            <div
                className="w-fit h-fit flex flex-col p-5 gap-3 bg-[#131316] rounded-2xl absolute z-50 border border-white/10"
                style={{
                    left: `${x + 8}px`,
                    top: `${y + 8}px`
                }}
                onClick={(e) => e.stopPropagation()}
            >
                <h2 className="text-md text-white uppercase font-medium">
                    {title}
                </h2>

                <hr className="text-white/10" />

                <div className="w-fit h-fit flex flex-col gap-2">
                    {items.map((item, index) => (
                        <motion.button
                            initial={{ opacity: 1, scale: 1 }}
                            whileHover={{ opacity: 0.6, scale: 1 }}
                            key={index}
                            className="w-full h-fit flex flex-col items-center justify-center rounded-sm"
                            onClick={() => {
                                onSelect(item, index)
                                onClose()
                            }}
                        >
                            <h3 className="text-md text-white/60 w-full text-left">
                                {item}
                            </h3>
                        </motion.button>
                    ))}
                </div>
            </div>
        )
    }

    return (
        <div className="w-full max-w-300 border-l border-r border-white/10 mx-auto h-fit">

            {/* navbar */}
            <div className="w-full p-3 flex flex-row gap-6 border-b border-white/10 sticky top-0">
                <h2 className="hostgrotesk text-white text-lg">
                    QTools
                </h2>

                <div className="w-full flex flex-row items-center justify-start gap-7">
                    <button className="flex flex-col items-center justify-center w-fit h-fit">
                        <h2 className="text-white/50 text-lg">
                            Home
                        </h2>
                    </button>

                    <button
                        className="flex flex-col items-center justify-center w-fit h-fit"
                        onClick={(e) => {
                            e.stopPropagation()

                            if (dropdown) {
                                setDropdown(null)
                                return
                            }

                            setDropdown({
                                title: "Tools",
                                items: [
                                    "Calculator",
                                    "Timer",
                                    "Converter"
                                ],
                                x: e.clientX,
                                y: e.clientY
                            })
                        }}
                    >
                        <h2 className="text-white/50 text-lg">
                            Tools
                        </h2>
                    </button>

                    <button className="flex flex-col items-center justify-center w-fit h-fit">
                        <h2 className="text-white/50 text-lg">
                            Legal
                        </h2>
                    </button>

                    <button className="flex flex-col items-center justify-center w-fit h-fit">
                        <h2 className="text-white/50 text-lg">
                            FAQ
                        </h2>
                    </button>

                    <button className="flex flex-col items-center justify-center w-fit h-fit">
                        <h2 className="text-white/50 text-lg">
                            About
                        </h2>
                    </button>
                </div>
            </div>

            {/* hero */}
            <div
                className="relative w-full h-fit flex flex-col p-20 pb-25 gap-0 overflow-hidden border-b border-white/10"
                style={{
                    backgroundColor: "#09090B",
                    backgroundImage:
                        "repeating-linear-gradient(135deg, transparent 0px, transparent 19px, #161618 20px, transparent 21px)"
                }}
            >
                <div className="relative z-10">
                    <h1 className="w-full text-left text-white text-[86px] font-semibold h-28 hostgrotesk">
                        QTools
                    </h1>

                    <h3 className="w-full text-left text-white/50 h-11">
                        Quick as easy-to-use tools for free.*
                    </h3>

                    <motion.button
                        initial={{ opacity: 1, scale: 1 }}
                        whileHover={{ opacity: 0.6, scale: 1.05 }}
                        className="w-fit h-fit flex flex-col p-2 bg-white items-center justify-center"
                    >
                        <h2 className="text-black text-md">
                            Get Started
                        </h2>
                    </motion.button>
                </div>
            </div>

            {/* featured tools */}
            <div className="w-full h-fit flex flex-col gap-6 p-6 border-b border-white/10">
                <h2 className="w-full text-left text-white text-xl hostgrotesk">
                    Featured Tools
                </h2>

                <div className="w-full h-fit flex flex-col gap-2">
                    <div className="w-full h-27 flex flex-row justify-between bg-[#0F0F12] p-5 rounded-sm border-t border-l-[0.5px] border-r-[0.5px] border-b-0 border-white/5">

                        <div className="w-full h-full flex flex-col gap-1 items-start justify-start">
                            <h2 className="text-white w-full text-left text-lg">
                                Youtube Video Downloader
                            </h2>

                            <p className="text-white/50 w-full text-left font-light">
                                Download YouTube videos easily with our video downloader tool
                            </p>
                        </div>

                        <div className="w-full h-full flex flex-col gap-0 items-end justify-center pr-2">
                            <motion.button
                                initial={{ opacity: 1, scale: 1 }}
                                whileHover={{ opacity: 0.7, scale: 1.05 }}
                                className="flex flex-col p-2 bg-white items-center justify-center w-fit h-fit rounded-sm"
                            >
                                <Icon
                                    icon="akar-icons:arrow-up-right"
                                    width={18}
                                    height={18}
                                    color="black"
                                />
                            </motion.button>
                        </div>

                    </div>
                </div>
            </div>

            {dropdown &&
                openDropdown({
                    ...dropdown,
                    onSelect: (item: string) => console.log(item),
                    onClose: () => setDropdown(null)
                })
            }

        </div>
    )
}