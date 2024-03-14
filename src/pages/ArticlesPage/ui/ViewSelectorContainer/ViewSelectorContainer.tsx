import { memo } from 'react';

interface ViewSelectorContainerProps {
  className?: string;
}

export const ViewSelectorContainer = memo(
    (props: ViewSelectorContainerProps) => {
        const { className } = props;

        return (
            <div />
        );
    },
);
