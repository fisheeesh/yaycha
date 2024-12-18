import { useContext, useRef } from "react";
import { AppContext } from "./ThemedApp";

// eslint-disable-next-line react/prop-types
export default function Form({ add }) {
    const { mode } = useContext(AppContext);

    const contentRef = useRef();
    const naemRef = useRef();

    return (
        <form
            onSubmit={(e) => {
                e.preventDefault();
                const content = contentRef.current.value;
                const name = naemRef.current.value;

                add(content, name);

                e.currentTarget.reset();
            }}
            style={{
                display: "flex",
                flexDirection: "column",
                gap: 3,
                padding: 10,
                borderRadius: 8,
                marginBottom: 20,
                background: mode === 'dark' ? '#555' : '#def',
            }}
        >
            <input
                ref={contentRef}
                type="text"
                style={{ padding: 5 }}
                placeholder="Content"
            />
            <input
                ref={naemRef}
                type="text"
                placeholder="Name"
                style={{ padding: 5 }}
            />

            <button
                type="submit"
                style={{
                    padding: 8,
                    background: "#0d6efd",
                    color: "white",
                    border: "0 none",
                }}
            >
                Post
            </button>
        </form>
    );
}
