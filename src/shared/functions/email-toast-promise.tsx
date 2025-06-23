import { addToast, closeAll } from "@heroui/toast";

/**
 * Abre um toast com uma mensagem de aguarde enquanto uma promessa
 * é resolvida. Se a promessa for resolvida com sucesso, fecha todos
 * os toasts e abre um novo com uma mensagem de sucesso.
 * Se a promessa for rejeitada, fecha todos os toasts e abre um novo
 * com uma mensagem de erro.
 *
 * @param {Promise<T>} promise A promessa a ser resolvida.
 * @returns A resolução da promessa ou uma exceção se a promessa for rejeitada.
 */
export async function EmailToastPromise<T>(promise: Promise<T>) {
  addToast({
    title: "Aguarde um instante...",
    description: "Estamos abrindo o seu aplicativo de email...",
    color: "warning",
    timeout: 0,
    promise,
  });

  try {
    const result = await promise;

    closeAll();

    addToast({
      title: "Sucesso!",
      description: "Email enviado com sucesso!",
      color: "success",
      timeout: 3000,
    });

    return result;
  } catch (err) {
    closeAll();

    addToast({
      title: "Algo deu errado!",
      description:
        "Houve um erro ao abrir o aplicativo de email. Tente novamente mais tarde!",
      color: "danger",
      timeout: 5000,
    });

    throw err;
  }
}
