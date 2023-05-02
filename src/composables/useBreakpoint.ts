import {computed, onMounted, onUnmounted, ref} from "vue";

export enum Breakpoint {
    xs = 0,
    sm = 640,
    md = 768,
    lg = 1024,
    xl = 1280,
    xxl = 1536
}

export type BreakpointValue = Partial<{
    [key in 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl']: any;
}>;

export function useBreakpoint() {
    let windowWidth = ref(window.innerWidth)

    const onWidthChange = () => {
        windowWidth.value = window.innerWidth
    }

    onMounted(() => window.addEventListener('resize', onWidthChange))
    onUnmounted(() => window.removeEventListener('resize', onWidthChange))

    const breakpoint = computed<Breakpoint>(() => {
        if (windowWidth.value <= Breakpoint.sm) return Breakpoint.xs
        if (windowWidth.value <= Breakpoint.md) return Breakpoint.sm
        if (windowWidth.value <= Breakpoint.lg) return Breakpoint.md
        if (windowWidth.value <= Breakpoint.xl) return Breakpoint.lg
        if (windowWidth.value <= Breakpoint.xxl) return Breakpoint.xl
        return Breakpoint.xxl
    })

    const onBreakpoint = (breakpoints: BreakpointValue) => {
        switch (breakpoint.value) {
            case Breakpoint.xs:
                return breakpoints.xs
            case Breakpoint.sm:
                return breakpoints.sm ?? breakpoints.xs
            case Breakpoint.md:
                return breakpoints.md ?? breakpoints.sm ?? breakpoints.xs
            case Breakpoint.lg:
                return breakpoints.lg ?? breakpoints.md ?? breakpoints.sm ?? breakpoints.xs
            case Breakpoint.xl:
                return breakpoints.xl ?? breakpoints.lg ?? breakpoints.md ?? breakpoints.sm ?? breakpoints.xs
            case Breakpoint.xxl:
                return breakpoints.xxl ?? breakpoints.xl ?? breakpoints.lg ?? breakpoints.md ?? breakpoints.sm ?? breakpoints.xs
        }
    }


    return {breakpoint, onBreakpoint}
}