import { openAi } from '../api/gpt';

export const openAiService = async (prompt) => {
  const data = await openAi(prompt);
  const reply = data.choices[0].message.content;
  return reply;
};
