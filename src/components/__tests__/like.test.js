import React from "react";
import { render, screen, fireEvent } from "@testing-library/react"
import Like from "../like";

test("Por defecto, se muestra el valor 'Likes: 0'", ()=>{
    render(<Like />);
    expect(screen.getByText("Likes: 0")).toBeInTheDocument();
})

test("Al hacer clic en el botón 'Like', el valor se incrementa en 1", ()=>{
    render(<Like />);
    const likeButton = screen.getByText("Like");
    fireEvent.click(likeButton);
    expect(screen.getByText("Likes: 1")).toBeInTheDocument();
})

test("Al hacer clic en el botón 'Dislike', el valor se decrementa en 1", ()=>{
    render(<Like />);
    const dislikeButton = screen.getByText("Dislike");
    fireEvent.click(dislikeButton);
    expect(screen.getByText("Likes: -1")).toBeInTheDocument();
})

