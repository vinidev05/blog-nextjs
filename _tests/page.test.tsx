import { render, screen } from "@testing-library/react";
import Home from "@/app/page";

jest.mock("@/data/artigos.json", () => [
  {
    titulo: "Teste artigo",
    autor: "Vinicius",
    data: "2026-01-01",
    resumo: "Resumo",
    slug: "teste-artigo",
  },
]);

describe("Home page", () => {
  it("renderiza lista de artigos", () => {
    render(<Home />);

    expect(screen.getByText("Artigos")).toBeInTheDocument();
    expect(screen.getByText("Teste artigo")).toBeInTheDocument();
  });
});