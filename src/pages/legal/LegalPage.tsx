
import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"

export default function LegalPage({title, description}: {
    title: string
    description: string
}) {
    return (
        <div className="w-full h-fit flex flex-col p-8 md:p-12 gap-6">
            <h1 className="w-full text-left text-3xl text-white hostgrotesk">
                {title}
            </h1>

            <div className="w-full text-left text-white/70 leading-7">
                <ReactMarkdown
                    remarkPlugins={[remarkGfm]}
                    components={{
                        h1: ({children}) => (
                            <h1 className="text-3xl text-white hostgrotesk mb-6">
                                {children}
                            </h1>
                        ),
                        h2: ({children}) => (
                            <h2 className="text-xl text-white hostgrotesk mt-8 mb-3">
                                {children}
                            </h2>
                        ),
                        h3: ({children}) => (
                            <h3 className="text-lg text-white hostgrotesk mt-6 mb-2">
                                {children}
                            </h3>
                        ),
                        p: ({children}) => (
                            <p className="text-white/70 mb-5">
                                {children}
                            </p>
                        ),
                        ul: ({children}) => (
                            <ul className="list-disc pl-6 mb-5 space-y-2 text-white/70">
                                {children}
                            </ul>
                        ),
                        ol: ({children}) => (
                            <ol className="list-decimal pl-6 mb-5 space-y-2 text-white/70">
                                {children}
                            </ol>
                        ),
                        li: ({children}) => (
                            <li className="text-white/70">
                                {children}
                            </li>
                        ),
                        strong: ({children}) => (
                            <strong className="text-white font-medium">
                                {children}
                            </strong>
                        ),
                        em: ({children}) => (
                            <em className="text-white/80">
                                {children}
                            </em>
                        ),
                        code: ({children}) => (
                            <code className="px-1.5 py-0.5 rounded bg-white/10 text-white/80 font-mono text-sm">
                                {children}
                            </code>
                        ),
                        hr: () => (
                            <hr className="border-white/10 my-8" />
                        )
                    }}
                >
                    {description}
                </ReactMarkdown>
            </div>
        </div>
    )
}
