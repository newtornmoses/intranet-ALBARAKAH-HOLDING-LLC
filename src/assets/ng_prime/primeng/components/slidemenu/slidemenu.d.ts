import { ElementRef, AfterViewInit, OnDestroy, Renderer2 } from '@angular/core';
import { DomHandler } from '../dom/domhandler';
import { MenuItem } from '../common/menuitem';
export declare class SlideMenuSub implements OnDestroy {
    slideMenu: SlideMenu;
    item: MenuItem;
    root: boolean;
    backLabel: string;
    menuWidth: number;
    effectDuration: any;
    easing: string;
    index: number;
    constructor(slideMenu: SlideMenu);
    activeItem: any;
    itemClick(event: any, item: MenuItem, listitem: any): void;
    ngOnDestroy(): void;
}
export declare class SlideMenu implements AfterViewInit, OnDestroy {
    el: ElementRef;
    domHandler: DomHandler;
    renderer: Renderer2;
    model: MenuItem[];
    popup: boolean;
    style: any;
    styleClass: string;
    menuWidth: number;
    viewportHeight: number;
    effectDuration: any;
    easing: string;
    backLabel: string;
    appendTo: any;
    autoZIndex: boolean;
    baseZIndex: number;
    containerViewChild: ElementRef;
    backwardViewChild: ElementRef;
    slideMenuContentViewChild: ElementRef;
    container: HTMLDivElement;
    backwardElement: HTMLDivElement;
    slideMenuContentElement: HTMLDivElement;
    documentClickListener: any;
    preventDocumentDefault: any;
    left: number;
    animating: boolean;
    constructor(el: ElementRef, domHandler: DomHandler, renderer: Renderer2);
    ngAfterViewInit(): void;
    toggle(event: any): void;
    show(event: any): void;
    hide(): void;
    moveOnTop(): void;
    onClick(event: any): void;
    goBack(): void;
    ngOnDestroy(): void;
}
export declare class SlideMenuModule {
}
