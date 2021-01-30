import React from 'react';

import { Container, Category, AddCategoryIcon } from './styles';
import ChannelButton from '../ChannelButton';

const ChannelList: React.FC = () => {
    return (
        <Container>
            <Category>
                <span>
                    Canais de Texto
                </span>
                <AddCategoryIcon/>
            </Category>
            <ChannelButton channelName="chat-livre"/>
            <ChannelButton channelName="trabalho"/>
            <ChannelButton channelName="wow"/>
            <ChannelButton channelName="lol"/>
            <ChannelButton channelName="estudo"/>
        </Container>
    );
}

export default ChannelList;