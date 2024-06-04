export class ResponsiveApiService {
    isDesktop(){
        return !this.isMobile();
    }

    isMobile(){
        return window.innerWidth <= 768;
    }
}
