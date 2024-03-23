import { ReactElement } from 'react';
import { AppRoutes } from '@/shared/const/router';
import { useRouteChange } from '@/shared/lib/router/useRouteChange';
import { ScrollTool } from '@/widgets/ScrollTool';

export function useAppToolbar() {
    const appRoute = useRouteChange();

    const toolbarByAppRoute: OptionalRecord<AppRoutes, ReactElement> = {
        [AppRoutes.ARTICLES]: <ScrollTool />,
        [AppRoutes.ARTICLE_DETAILS]: <ScrollTool />,
    };

    return toolbarByAppRoute[appRoute];
}
