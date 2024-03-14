import { useTranslation } from 'react-i18next';
import { memo, useMemo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Select, SelectOption } from '@/shared/ui/deprecated/Select';
import { SortOrder } from '@/shared/types/sort';
import cls from './ArticleSortSelector.module.scss';
import { ArticleSortField } from '@/entities/Article';
import { ToggleFeatures } from '@/shared/lib/features';
import { VStack } from '@/shared/ui/redesigned/Stack';
import { ListBox } from '@/shared/ui/redesigned/Popups';
import { Text } from '@/shared/ui/redesigned/Text';

interface ArticleSortSelectorProps {
    className?: string;
    sort: ArticleSortField;
    order: SortOrder;
    onChangeOrder: (newOrder: SortOrder) => void;
    onChangeSort: (newSort: ArticleSortField) => void;
}

export const ArticleSortSelector = memo((props: ArticleSortSelectorProps) => {
    const {
        className,
        sort,
        order,
        onChangeOrder,
        onChangeSort,
    } = props;
    const { t } = useTranslation();

    const orderOptions = useMemo<SelectOption<SortOrder>[]>(() => [
        {
            value: 'asc',
            content: t('ascending order'),
        },
        {
            value: 'desc',
            content: t('descending order'),
        },
    ], [t]);

    const sortFieldOptions = useMemo<SelectOption<ArticleSortField>[]>(() => [
        {
            value: ArticleSortField.CREATED,
            content: t('date'),
        },
        {
            value: ArticleSortField.TITLE,
            content: t('name'),
        },
        {
            value: ArticleSortField.VIEWS,
            content: t('views'),
        },
    ], [t]);

    return (
        <ToggleFeatures
            feature="isAppRedesigned"
            on={(
                <div
                    className={classNames(
                        cls.ArticleSortSelectorRedesigned,
                        {},
                        [className],
                    )}
                >
                    <VStack gap="8">
                        <Text text={t('Sorted by:')} />
                        <ListBox
                            items={sortFieldOptions}
                            value={sort}
                            onChange={onChangeSort}
                        />
                        <ListBox
                            items={orderOptions}
                            value={order}
                            onChange={onChangeOrder}
                        />
                    </VStack>
                </div>
            )}
            off={(
                <div
                    className={classNames(cls.ArticleSortSelector, {}, [
                        className,
                    ])}
                >
                    <Select<ArticleSortField>
                        options={sortFieldOptions}
                        label={t('Сортировать ПО')}
                        value={sort}
                        onChange={onChangeSort}
                    />
                    <Select
                        options={orderOptions}
                        label={t('по')}
                        value={order}
                        onChange={onChangeOrder}
                        className={cls.order}
                    />
                </div>
            )}
        />
    );
});
