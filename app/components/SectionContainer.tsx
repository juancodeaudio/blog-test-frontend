type Props = {
  children : React.ReactNode;
  className? : string;
}

const SectionContainer = ({ children, className }: Props) => {
  return (
    <section className={`w-screen px-10 my-20 ${className}`}>
      {children}
    </section>
  )
}

export default SectionContainer