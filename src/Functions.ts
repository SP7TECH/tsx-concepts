// the void type

function invokeInTwoSeconds(callback: () => undefined) {
  setTimeout(() => callback, 2000);
}

function invokeInThreeSeconds(callback: () => void) {
  setTimeout(() => callback, 3000);
}

const values: number[] = [];

// invokeInTwoSeconds(() => values.push(5))
invokeInThreeSeconds(() => values.push(10));

// function overloading

type FormSubmitHandler = (data: FormData) => void;
type MessageHandler = (evt: MessageHandler) => void;

function handleMainEvent(elem: HTMLFormElement, handler: FormSubmitHandler);
function handleMainEvent(elem: HTMLIFrameElement, handler: MessageHandler);
function handleMainEvent(
  elem: HTMLFormElement | HTMLIFrameElement,
  handler: FormSubmitHandler | MessageHandler
) {}

const myForm = document.getElementsByTagName("form")[0];
const myFrame = document.getElementsByTagName("iframe")[0];

handleMainEvent(myForm, () => {});
handleMainEvent(myFrame, () => {});
