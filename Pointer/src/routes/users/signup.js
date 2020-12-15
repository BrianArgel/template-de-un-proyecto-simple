import fetch from "node-fetch";

const headers = {
  "Content-Type": "application/json",
  Accept: "application/json",
};

export async function post(req, res) {
  try {
    const { email, password, username } = req.body;

    // aqui recien se hace el fetch al servidor, esto es para que tanto el cliente como el servidor sepan sobre el token.

    // sapper es un servidor para svelte, crea un servidor como express y con node, asi lo renderiza y lo manda al cliente html, css y js puro.

    // Si, yo pense que se podia hacer un backen aqui mismo, pero no se puede

    const result = await fetch(`http://localhost:4000/api/auth/signup`, {
      method: "POST",
      headers,
      body: JSON.stringify({ email, password, username }),
    });

    const parsed = await result.json();

    if (typeof parsed.error !== "undefined") {
      throw new Error(parsed.error);
    }

    req.session.token = parsed.token;
    res.end(JSON.stringify({ token: parsed.token }));
  } catch (error) {
    res.end(JSON.stringify({ error: error.message }));
  }
}