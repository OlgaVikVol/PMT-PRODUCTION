/* eslint-disable olga-plugin/public-api-imports */
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

import { StarRating } from '@/shared/ui/StarRating/StarRating';
import { RatingCard } from '@/entities/Rating';
import { Page } from '@/widgets/Page';

const MainPage = () => {
    const { t } = useTranslation();
    const [value, setValue] = useState('');

    const onChange = (val: string) => {
        setValue(val);
    };

    return (
        <Page>
            {t('Main page')}
        </Page>
    );
};

export default MainPage;
