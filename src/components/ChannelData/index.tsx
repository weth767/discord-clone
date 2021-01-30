import React, { useRef, useEffect } from 'react';
import ChannelMessage, { Mention } from '../ChannelMessage';

import { Container, Messages, InputWrapper, Input, InputIcon } from './styles';

const ChannelData: React.FC = () => {
    const messagesRef = useRef() as React.MutableRefObject<HTMLDivElement>;

    useEffect(() =>{
        const div = messagesRef.current;
        if (div) {
            div.scrollTop = div.scrollHeight;
        }
    }, [messagesRef]);
    return (
        <Container>
           <Messages ref={messagesRef}>
                <ChannelMessage
                    author="João Paulo"
                    date="30/01/2021"
                    content="Olá"
                />

                <ChannelMessage
                    author="João Paulo"
                    date="30/01/2021"
                    content="Olá"
                />

                <ChannelMessage
                    author="João Paulo"
                    date="30/01/2021"
                    content="Olá"
                />

                <ChannelMessage
                    author="João Paulo"
                    date="30/01/2021"
                    content="Olá"
                />

                <ChannelMessage
                    author="João Paulo"
                    date="30/01/2021"
                    content="Olá"
                />

                <ChannelMessage
                    author="João Paulo"
                    date="30/01/2021"
                    content="Olá"
                />

                <ChannelMessage
                    author="João Paulo"
                    date="30/01/2021"
                    content="Olá"
                />

                <ChannelMessage
                    author="João Paulo"
                    date="30/01/2021"
                    content="Olá"
                />

                <ChannelMessage
                    author="João Paulo"
                    date="30/01/2021"
                    content="Olá"
                />

                <ChannelMessage
                    author="João Paulo"
                    date="30/01/2021"
                    content="Olá"
                />

                <ChannelMessage
                    author="João Paulo"
                    date="30/01/2021"
                    content="Olá"
                />

                <ChannelMessage
                    author="João Paulo"
                    date="30/01/2021"
                    content="Olá"
                />

                <ChannelMessage
                    author="João Paulo"
                    date="30/01/2021"
                    content="Olá"
                />

                <ChannelMessage
                    author="João Paulo"
                    date="30/01/2021"
                    content="Olá"
                />

                <ChannelMessage
                    author="Diego Fernandes"
                    date="30/01/2021"
                    isBot={true}
                    hasMention={true}
                    content={
                        <>
                            <Mention>@João Paulo</Mention> está por ai?
                        </>
                    }
                />
           </Messages>
           <InputWrapper>
            <Input type="text" placeholder="Conversar em #chat-livre" />
            <InputIcon/>
           </InputWrapper>
        </Container>
    );
}

export default ChannelData;