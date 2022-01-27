export function domInjector(seletor: string) {
  return function (target: any, propertyKey: string) {
    // taget don´t have an instace of the class
    console.log(
      `Modificando prototype ${target.constructor.name} e adicionando getter para a propriedade ${propertyKey}`
    );

    let elemento: HTMLElement;

    const getter = function () {
      if (!elemento) {
        elemento = <HTMLElement>document.querySelector(seletor); // Casting on documentQuerySelector
        console.log(
          `Buscando elemento do dom com o seletor ${seletor} para injetar em ${propertyKey}`
        );
      }
      return elemento;
    };

    Object.defineProperty(target, propertyKey, {
      // Define a getter in target class (NegociacaoController)
      get: getter,
    });
  };
}
