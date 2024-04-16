import { StyledComponentsRegistry, TanstackProvider } from "lib";
import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
const poppins = Poppins({ weight: ["700", "600"], subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dell SR",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.className} ${poppins.className}`}>
      <body>
        <StyledComponentsRegistry>
          <TanstackProvider>{children}</TanstackProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
