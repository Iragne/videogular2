import { OnInit, ElementRef, AfterViewInit } from '@angular/core';
import { VgAPI } from '../core/services/vg-api';
import { VgControlsHidden } from './../core/services/vg-controls-hidden';
import 'rxjs/add/observable/fromEvent';
import { Subscription } from 'rxjs/Subscription';
export declare class VgControls implements OnInit, AfterViewInit {
    private API;
    private ref;
    private hidden;
    elem: HTMLElement;
    target: any;
    isAdsPlaying: string;
    hideControls: boolean;
    vgFor: string;
    vgAutohide: boolean;
    vgAutohideTime: number;
    private timer;
    private hideTimer;
    subscriptions: Subscription[];
    constructor(API: VgAPI, ref: ElementRef, hidden: VgControlsHidden);
    ngOnInit(): void;
    onPlayerReady(): void;
    ngAfterViewInit(): void;
    onPlay(): void;
    onPause(): void;
    onStartAds(): void;
    onEndAds(): void;
    hide(): void;
    show(): void;
    private hideAsync();
    ngOnDestroy(): void;
}
