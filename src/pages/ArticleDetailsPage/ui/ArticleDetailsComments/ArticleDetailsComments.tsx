import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Text as TextDeprecated, TextSize } from '@/shared/ui/deprecated/Text';
import { AddCommentForm } from '@/features/addCommentForm';
import { CommentList } from '@/entities/Comment';
import { useInitialEffect } from '@/shared/lib/hooks/useInitialEffect/useInitialEffect';
import { VStack } from '@/shared/ui/redesigned/Stack';
import { fetchCommentsByArticleId } from '../../model/services/fetchCommentsByArticleId/fetchCommentsByArticleId';
import { getArticleComments } from '../../model/slices/articleDetailsCommentsSlice';
import { getArticleCommentsIsLoading } from '../../model/selectors/comments';
import { addCommentForArticle } from '../../model/services/addCommentForArticle/addCommentForArticle';
import { ToggleFeatures } from '@/shared/lib/features';
import { Text } from '@/shared/ui/redesigned/Text';

interface ArticleDetailsCommentsProps {
  className?: string;
  id?: string;
}

export const ArticleDetailsComments = memo((props: ArticleDetailsCommentsProps) => {
    const { className, id } = props;
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const comments = useSelector(getArticleComments.selectAll);
    const commentsIsLoading = useSelector(getArticleCommentsIsLoading);

    const onSendComment = useCallback((text: string) => {
        // @ts-ignore
        dispatch(addCommentForArticle(text));
    }, [dispatch]);

    useInitialEffect(() => {
        // @ts-ignore
        dispatch(fetchCommentsByArticleId(id));
    });

    return (
        <VStack gap="16" max className={classNames('', {}, [className])}>
            <ToggleFeatures
                feature="isAppRedesigned"
                on={<Text size="l" title={t('Комментарии')} />}
                off={(
                    <TextDeprecated
                        size={TextSize.L}
                        title={t('Комментарии')}
                    />
                )}
            />
            <AddCommentForm onSendComment={onSendComment} />
            <CommentList
                isLoading={commentsIsLoading}
                comments={comments}
            />
        </VStack>
    );
});
