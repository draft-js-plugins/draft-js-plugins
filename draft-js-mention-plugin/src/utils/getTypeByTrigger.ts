export default function getTypeByTrigger(trigger: string): string {
  return trigger === '@' ? 'mention' : `${trigger}mention`;
}
