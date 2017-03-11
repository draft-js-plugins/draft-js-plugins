import {
  Entity,
  EditorState,
  AtomicBlockUtils
} from 'draft-js';

let count = 0;
const examples = [
  '\\int_a^bu\\frac{d^2v}{dx^2}\\,dx\n' +
  '=\\left.u\\frac{dv}{dx}\\right|_a^b\n' +
  '-\\int_a^b\\frac{du}{dx}\\frac{dv}{dx}\\,dx',

  'P(E) = {n \\choose k} p^k (1-p)^{ n-k} ',

  '\\tilde f(\\omega)=\\frac{1}{2\\pi}\n' +
  '\\int_{-\\infty}^\\infty f(x)e^{-i\\omega x}\\,dx',

  '\\frac{1}{(\\sqrt{\\phi \\sqrt{5}}-\\phi) e^{\\frac25 \\pi}} =\n' +
  '1+\\frac{e^{-2\\pi}} {1+\\frac{e^{-4\\pi}} {1+\\frac{e^{-6\\pi}}\n' +
  '{1+\\frac{e^{-8\\pi}} {1+\\ldots} } } }',
];

export default function insertTeXBlock(editorState, tex) {
  let texContent = tex;
  if (!texContent) {
    const nextFormula = count % examples.length;
    count += 1;
    texContent = examples[nextFormula];
  }

  const entityKey = Entity.create('kateX', 'IMMUTABLE', { content: texContent });
  const newEditorState = AtomicBlockUtils.insertAtomicBlock(editorState, entityKey, ' ');

  return EditorState.forceSelection(
    newEditorState,
    editorState.getCurrentContent().getSelectionAfter()
  );
}
