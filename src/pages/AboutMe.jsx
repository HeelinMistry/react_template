// src/pages/AboutMe.jsx
import React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";

export default function AboutMe() {
    return (
        <PageContainer>
            <motion.header
                initial={{ opacity: 0, y: -40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                <Title>About Me</Title>
                <Subtitle>Heelin Mistry — Developer, Builder, Creator</Subtitle>
            </motion.header>

            <Section
                title="Who I Am"
                content="I’m a developer with a computer science background, passionate about
        building solutions that are practical, scalable, and creative. I enjoy working
        across languages and platforms, from backend APIs in Node.js and Python to
        SwiftUI iOS apps and full-stack web apps."
            />

            <Section
                title="What I Work On"
                list={[
                    "📱 SwiftUI multi-module iOS apps with clean architecture",
                    "🖥 Node.js + Express backends, integrating SQL Server & GraphQL",
                    "🔐 Machine learning & cryptography projects in Python",
                    "🎨 React frontends for interactive web experiences",
                    "🧩 Creative side projects like steganography tools & automation scripts",
                ]}
            />

            <Section
                title="Something"
                list={[
                    <>
                        <a href="https://heelinmistry.github.io/grocery_price_tracker/" target="_blank"
                             rel="noopener noreferrer">
                        Grocery Tracker
                    </a>
                    </>
                ]}
            />

            <Section
                title="My Approach"
                content="I focus on building modular, maintainable systems — whether that means
        coordinating feature flows in iOS with an App Coordinator, structuring
        standalone backend services, or experimenting with new ideas in side
        projects. I like to keep things scalable without overcomplicating them."
            />

            <Section
                title="Beyond Coding"
                content="Outside of code, I’m exploring creative outlets like custom bookmark
        design, light-through art, and personal finance tools inspired by
        real-world needs. I also enjoy learning new tech concepts and finding
        ways to make them accessible to others."
            />

            <Footer>
                <p>Let’s build something together 🚀</p>
            </Footer>
        </PageContainer>
    );
}

function Section({ title, content, list }) {
    return (
        <motion.section
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
        >
            <SectionTitle>{title}</SectionTitle>
            {content && <SectionText>{content}</SectionText>}
            {list && (
                <List>
                    {list.map((item, idx) => (
                        <li key={idx}>{item}</li>
                    ))}
                </List>
            )}
        </motion.section>
    );
}

// ======= Styled Components =======
const theme = {
    primary: "#1e293b", // dark navy
    accent: "#38bdf8", // cyan
    background: "#f8fafc", // light gray
    text: "#0f172a", // deep gray
    muted: "#64748b", // muted gray
};

const PageContainer = styled.div`
  max-width: 900px;
  margin: 0 auto;
  padding: 2rem;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  background-color: ${theme.background};
  color: ${theme.text};
  line-height: 1.6;
`;

const Title = styled.h1`
  font-size: 2.8rem;
  margin: 0;
  color: ${theme.primary};
  text-align: center;
`;

const Subtitle = styled.p`
  font-size: 1.2rem;
  color: ${theme.muted};
  text-align: center;
`;

const SectionTitle = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
  border-left: 4px solid ${theme.accent};
  padding-left: 0.5rem;
`;

const SectionText = styled.p`
  font-size: 1rem;
  margin: 0.5rem 0 1rem;
`;

const List = styled.ul`
  padding-left: 1.5rem;
  font-size: 1rem;
  li {
    margin: 0.3rem 0;
  }
`;

const Footer = styled.footer`
  text-align: center;
  padding-top: 1rem;
  border-top: 1px solid ${theme.muted};
  font-size: 1rem;
  color: ${theme.muted};
`;

// ======= END =======
