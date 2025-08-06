import '@chatscope/chat-ui-kit-styles/dist/default/styles.min.css';
import { MainContainer, ChatContainer, MessageList, Message, MessageInput } from '@chatscope/chat-ui-kit-react';
import { useState, useEffect } from 'react';
import { openAiService } from '../apis/service/gptService';

import styled from 'styled-components';

const ResetButton = styled.button`
  width: 10rem;
  height: 5rem;
`;

const Chatbot = () => {
  const [messages, setMessages] = useState([]);

  const handleSend = async (input) => {
    //사용자 메세지
    let newMessage = {
      message: input,
      direction: 'outgoing',
    };
    const updated = [...messages, newMessage];
    setMessages(updated);
    localStorage.setItem('chat_message', JSON.stringify(updated));

    // 봇 메세지
    let prompt = {
      model: 'gpt-4o',
      messages: [
        { role: 'system', content: 'you are a helpful assistant' },
        { role: 'user', content: input },
      ],
      max_tokens: 200,
    };
    try {
      const reply = await openAiService(prompt);

      let newBotMessage = {
        message: reply,
        direction: 'incoming',
      };

      const updatedBot = [...updated, newBotMessage];
      setMessages(updatedBot);
      localStorage.setItem('chat_message', JSON.stringify(updatedBot));
    } catch (e) {
      console.error(e);
    }
  };

  //로컬스토리지 초기화
  const handleReset = () => {
    localStorage.clear();
    setMessages([]);
  };

  //로컬스토리지에서 불러오기
  useEffect(() => {
    const saved = localStorage.getItem('chat_message');
    setMessages(JSON.parse(saved || '[]'));
  }, []);
  return (
    <>
      <MainContainer style={{ width: '70%', height: '100vh' }}>
        <ChatContainer>
          <MessageList style={{ backgroundColor: 'lightsalmon' }}>
            {messages.map((m, idx) => {
              return <Message key={idx} model={m} style={{ fontSize: '2rem' }} />;
            })}
          </MessageList>
          <MessageInput placeholder="메세지 작성" onSend={handleSend} />
        </ChatContainer>
      </MainContainer>
      <ResetButton onClick={handleReset}>초기화</ResetButton>
    </>
  );
};

export default Chatbot;
