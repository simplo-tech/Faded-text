const Layout = ({ children }: { children: React.ReactNode }) => {
  return <div>{children}</div>;
};

const FadedText = ({ text, delay = 0 }: { text: string; delay?: number }) => {
  return <p style={{ animationDelay: delay + "s" }}>{text}</p>;
};

const baseDelay = 1;
export default function App() {
  return (
    <Layout>
      <article style={{ textAlign: "center" }}>
        <FadedText delay={baseDelay} text="Hey!" />
        <FadedText delay={baseDelay + 1} text="I'm glad you made it." />
        <FadedText
          delay={baseDelay + 3}
          text="Are you interested in who I am?"
        />
        <FadedText
          delay={baseDelay + 5}
          text="If so you're at the right place."
        />
        <FadedText delay={baseDelay + 7} text="Chabba!" />
      </article>
    </Layout>
  );
}
