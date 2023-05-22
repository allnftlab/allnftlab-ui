"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var src_exports = {};
__export(src_exports, {
  OnboardingModal: () => OnboardingModal
});
module.exports = __toCommonJS(src_exports);

// src/components/OnboardingModal.tsx
var Dialog = __toESM(require("@radix-ui/react-dialog"));
var import_react = require("react");
var import_jsx_runtime = require("react/jsx-runtime");
var OnboardingModal = ({ initialState }) => {
  const [open, setOpen] = (0, import_react.useState)(initialState);
  const handleOnOpenChange = (state) => {
    setOpen(state);
  };
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "flex items-center justify-center font-sans", children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Dialog.Root, { open, onOpenChange: handleOnOpenChange, children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog.Trigger, { asChild: true, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", { className: "rounded-full border border-solid border-zinc-600 bg-zinc-900 w-12 h-12 text-2xl font-bold text-white flex items-center justify-center", children: "?" }) }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Dialog.Portal, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog.Overlay, { className: "fixed inset-0 bg-zinc-950 backdrop-blur-xl opacity-50" }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Dialog.Content, { className: "fixed left-[50%] top-[50%] flex h-[50rem] max-h-[90vh] w-[95%] max-w-[662px] translate-x-[-50%] translate-y-[-50%] flex-col rounded-[6px] bg-[#151718] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px]", children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", { className: "flex items-center justify-between rounded-t-[6px] border border-solid border-zinc-600 bg-zinc-900 p-5  text-white", children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { className: "text-xl text-zinc-200", children: "allnft{lab}" }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { className: "text-base text-neutral-400", children: "Passo a passo" })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { className: "m-auto h-full w-full overflow-auto border-x border-solid border-zinc-600 px-5 pt-7", children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "flex flex-col gap-3", children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", { className: "text-3xl text-zinc-200", children: "Aprenda como comprar" }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { className: "text-neutral-500", children: "O allnft{lab} criou um passo a passo para te ajudar a colecionar seu token! Aqui est\xE1 tudo que precisa saber para adquirir um NFT." })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "my-10 [&>*:not(:last-child)]:mb-12", children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { className: "flex flex-col justify-start gap-4", children: [
              /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "flex flex-row gap-3", children: [
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "flex h-6 w-6 items-center justify-center rounded-md border border-solid border-zinc-600 bg-zinc-800", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { className: "text-base text-neutral-400", children: "1" }) }),
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { className: "text-lg text-zinc-200", children: "Criar carteira" })
              ] }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { className: "text-neutral-500", children: [
                "Acesse o site",
                " ",
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                  "a",
                  {
                    href: "http://metamask.io",
                    className: "underline",
                    target: "_blank",
                    rel: "noreferrer",
                    children: "http://metamask.io"
                  }
                ),
                ", clique em \u201CDownload\u201D. A Metamask pode ser acessada atrav\xE9s da extens\xE3o para navegadores no desktop ou atrav\xE9s de aplicativo para dispositivos m\xF3veis. Ap\xF3s o download, siga as instru\xE7\xF5es e crie sua carteira.",
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
                " ",
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
                "Obs.: A metamask n\xE3o est\xE1 dispon\xEDvel para o navegador desktop Safari."
              ] }) })
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { className: "flex flex-col justify-start gap-4", children: [
              /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "flex flex-row gap-3", children: [
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "flex h-6 w-6 items-center justify-center rounded-md border border-solid border-zinc-600 bg-zinc-800", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { className: "text-base text-neutral-400", children: "2" }) }),
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { className: "text-lg text-zinc-200", children: "Conectar a carteira" })
              ] }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { className: "text-neutral-500", children: "Acesse a p\xE1gina de checkout e clique em \u201Cconectar carteira\u201D, selecione a carteira que deseja conectar, em seguida, autorize a conex\xE3o atrav\xE9s do pop-up de assinatura." }) })
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { className: "flex flex-col justify-start gap-4", children: [
              /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "flex flex-row gap-3", children: [
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "flex h-6 w-6 items-center justify-center rounded-md border border-solid border-zinc-600 bg-zinc-800", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { className: "text-base text-neutral-400", children: "3" }) }),
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { className: "text-lg text-zinc-200", children: "Selecionar NFT" })
              ] }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { className: "text-neutral-500", children: "Selecione as NFTs que deseja obter e clique em \u201Ccontinuar\u201D. Para mudar a quantidade que voc\xEA deseja, basta conferir o Resumo do pedido." }) })
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { className: "flex flex-col justify-start gap-4", children: [
              /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "flex flex-row gap-3", children: [
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "flex h-6 w-6 items-center justify-center rounded-md border border-solid border-zinc-600 bg-zinc-800", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { className: "text-base text-neutral-400", children: "4" }) }),
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { className: "text-lg text-zinc-200", children: "Cadastro da conta" })
              ] }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { className: "text-neutral-500", children: "Preencha os campos com seus dados. Essas informa\xE7\xF5es s\xE3o necess\xE1rias para prop\xF3sitos fiscais e de seguran\xE7a. Confirme sua identidade atrav\xE9s do c\xF3digo de verifica\xE7\xE3o enviado ao e-mail cadastrado." }) })
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { className: "flex flex-col justify-start gap-4", children: [
              /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "flex flex-row gap-3", children: [
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "flex h-6 w-6 items-center justify-center rounded-md border border-solid border-zinc-600 bg-zinc-800", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { className: "text-base text-neutral-400", children: "5" }) }),
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { className: "text-lg text-zinc-200", children: "Realizar pagamento" })
              ] }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { className: "text-neutral-500", children: "Abra o aplicativo do seu banco pelo celular. Na op\xE7\xE3o PIX, escolha \u201CLer QR Code\u201D e aponte sua c\xE2mera para o c\xF3digo. Revise as informa\xE7\xF5es e confirme o pagamento." }) })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", { className: "flex justify-end rounded-b-[6px] border border-solid border-zinc-600 bg-zinc-900 px-5 py-4", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog.Close, { asChild: true, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", { className: "rounded-lg border border-solid border-zinc-600 bg-[#242424] px-4 py-2 text-lg font-semibold text-zinc-200 shadow-[0px_2px_1px_#000000cc]", children: "Continuar" }) }) })
      ] })
    ] })
  ] }) });
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  OnboardingModal
});