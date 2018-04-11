import { ChangeDetectorRef, OnInit, OnDestroy } from "@angular/core";
import { IPlayable, IMediaSubscriptions } from "./i-playable";
import { Subscription } from "rxjs/Subscription";
import { VgAPI } from '../services/vg-api';
import { Subject } from 'rxjs/Subject';
import { IMediaElement } from './i-media-element';
import 'rxjs/add/observable/fromEvent';
import 'rxjs/add/observable/combineLatest';
export declare class VgMedia implements OnInit, OnDestroy, IPlayable {
    private api;
    private ref;
    elem: any;
    vgMedia: IMediaElement;
    vgMaster: boolean;
    state: string;
    time: any;
    buffer: any;
    track: any;
    subscriptions: IMediaSubscriptions | any;
    canPlay: boolean;
    canPlayThrough: boolean;
    isMetadataLoaded: boolean;
    isWaiting: boolean;
    isCompleted: boolean;
    isLive: boolean;
    isBufferDetected: boolean;
    checkInterval: number;
    currentPlayPos: number;
    lastPlayPos: number;
    checkBufferSubscription: any;
    syncSubscription: Subscription;
    canPlayAllSubscription: any;
    playAtferSync: boolean;
    mutationObs: Subscription;
    canPlayObs: Subscription;
    canPlayThroughObs: Subscription;
    loadedMetadataObs: Subscription;
    waitingObs: Subscription;
    progressObs: Subscription;
    endedObs: Subscription;
    playingObs: Subscription;
    playObs: Subscription;
    pauseObs: Subscription;
    timeUpdateObs: Subscription;
    volumeChangeObs: Subscription;
    errorObs: Subscription;
    bufferDetected: Subject<boolean>;
    playPromise: Promise<any>;
    constructor(api: VgAPI, ref: ChangeDetectorRef);
    ngOnInit(): void;
    prepareSync(): void;
    startSync(): void;
    onMutation(mutations: Array<MutationRecord>): void;
    loadMedia(): void;
    play(): Promise<any>;
    pause(): void;
    readonly id: any;
    readonly duration: number;
    currentTime: number;
    volume: number;
    playbackRate: number;
    readonly buffered: TimeRanges;
    readonly textTracks: TextTrackList;
    onCanPlay(event: any): void;
    onCanPlayThrough(event: any): void;
    onLoadMetadata(event: any): void;
    onWait(event: any): void;
    onComplete(event: any): void;
    onStartPlaying(event: any): void;
    onPlay(event: any): void;
    onPause(event: any): void;
    onTimeUpdate(event: any): void;
    onProgress(event: any): void;
    onVolumeChange(event: any): void;
    onError(event: any): void;
    bufferCheck(): void;
    startBufferCheck(): void;
    stopBufferCheck(): void;
    seekTime(value: number, byPercent?: boolean): void;
    addTextTrack(type: string, label?: string, language?: string, mode?: 'disabled' | 'hidden' | 'showing'): TextTrack;
    ngOnDestroy(): void;
}