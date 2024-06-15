

export default function AuthLayout({ children }: { children: React.ReactNode }) {
     return (
          <section className="w-full h-[100vh] flex justify-center items-center bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%">
               {children}
          </section>
     )
}