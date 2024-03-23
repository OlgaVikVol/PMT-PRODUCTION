import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { VStack } from '@/shared/ui/redesigned/Stack';
import { ScrollButton } from '@/features/ScrollButton';

interface ScrollToolProps {
    className?: string;
}

export const ScrollTool = memo((props: ScrollToolProps) => {
    const { className } = props;

    return (
        <VStack
            justify="center"
            align="center"
            max
            className={className}
        >
            <ScrollButton />
        </VStack>
    );
});
