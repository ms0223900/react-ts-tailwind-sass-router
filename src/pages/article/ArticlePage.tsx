import React, { memo } from 'react';
import { useParams } from 'react-router-dom';

const ArticlePage = () => {
    const { articleId } = useParams();

    return (
        <h1 className={'text-3xl text-center'}>{`Article: ${articleId}`}</h1>
    );
};

export default memo(ArticlePage);
