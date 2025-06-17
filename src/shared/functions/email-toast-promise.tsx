import { addToast, closeAll } from "@heroui/toast";

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
