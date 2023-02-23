export const typography = {
  h1: (props: any) => <span className="pt-6"><h2 className="font-mono text-3xl text-slate-800 dark:text-slate-100" {...props} /></span>,
  h2: (props: any) => <span className="pt-4"><h3 className="font-mono text-2xl text-slate-800 dark:text-slate-100" {...props} /></span>,
  h3: (props: any) => <span className="pt-2"><h4 className="font-mono text-xl text-slate-800 dark:text-slate-100" {...props} /></span>,
  h4: (props: any) => <span className="pt-2"><h5 className="font-mono text-lg text-slate-800 dark:text-slate-100" {...props} /></span>,
  h5: (props: any) => <span className="pt-2"><h6 className="font-mono text-md text-slate-800 dark:text-slate-100" {...props} /></span>,
  h6: (props: any) => <span className="pt-2"><h6 className="font-mono text-sm text-slate-800 dark:text-slate-100" {...props} /></span>,
  hr: (props: any) => <hr className="my-10 lg:my-20 border-0 border-b border-slate-200 dark:border-slate-700" {...props} />,
  img: (props: any) => <img {...props} className="w-full h-auto rounded-lg overflow-hidden" />,
  p: (props: any) => <p {...props} />,
  a: (props: any) => <a className="text-blue-500" {...props} />,
  ul: (props: any) => <ul className="list-disc list-outside marker:text-slate-500 dark:marker:text-slate-600 text-slate-900 dark:text-slate-50 pl-6 pt-2 mb-4" {...props} />,
  ol: (props: any) => <ol className="list-decimal list-outside text-slate-900 dark:text-slate-50 pl-6 pt-2 mb-4" {...props} />,
  li: ({children, ...props}: any) => <li {...props}><p>{children}</p></li>,
  blockquote: ({children, ...props}: any) => (
    <div className="border-l-4 pl-4 py-6 border-slate-200 dark:border-slate-700">
      <p {...props}>
        <strong>{children}</strong>
      </p>
    </div>
  ),
  pre: (props: any) => <pre {...props} />
}

export default typography