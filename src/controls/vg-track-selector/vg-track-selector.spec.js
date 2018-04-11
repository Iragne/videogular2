"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var vg_track_selector_1 = require("./vg-track-selector");
var vg_api_1 = require("../../core/services/vg-api");
describe('Track Selector control', function () {
    var vgTrackSelector;
    function createSubtitleTrack(label, srclang, isDefault) {
        var track = {};
        track.tagName = 'TRACK';
        track.kind = 'subtitles';
        track.label = label;
        track.srclang = srclang;
        track.default = isDefault;
        return track;
    }
    beforeEach(function () {
        var ref = {
            nativeElement: {
                getAttribute: function (name) {
                    return name;
                }
            }
        };
        vgTrackSelector = new vg_track_selector_1.VgTrackSelector(ref, new vg_api_1.VgAPI());
    });
    describe('onPlayerReady', function () {
        beforeEach(function () {
            vgTrackSelector.API.getMasterMedia = function () {
                return { elem: {
                        children: [
                            createSubtitleTrack('English', 'en', false),
                            createSubtitleTrack('Español', 'es', true),
                            {},
                            {},
                            {}
                        ]
                    } };
            };
        });
        it('Should show subtitles tracks only', function () {
            vgTrackSelector.onPlayerReady();
            expect(vgTrackSelector.tracks.length).toBe(3); // 2 subs + 'Off'
        });
        it('Should set the selected option', function () {
            vgTrackSelector.onPlayerReady();
            expect(vgTrackSelector.tracks.filter(function (item) { return item.selected === true; })[0].label).toBe('Español');
        });
        it('Should have an Off option', function () {
            vgTrackSelector.onPlayerReady();
            expect(vgTrackSelector.tracks.filter(function (item) { return item.label === 'Off'; }).length).toBe(1);
        });
        it('Should set Off option as selected when there is no default track', function () {
            vgTrackSelector.API.getMasterMedia = function () {
                return { elem: {
                        children: [
                            createSubtitleTrack('English', 'en', false),
                            createSubtitleTrack('Español', 'es', false)
                        ]
                    } };
            };
            vgTrackSelector.onPlayerReady();
            expect(vgTrackSelector.tracks.filter(function (item) { return item.selected === true; })[0].label).toBe('Off');
        });
    });
    describe('selectTrack', function () {
        beforeEach(function () {
            spyOn(vgTrackSelector.API, 'getMasterMedia').and.returnValue({
                elem: {
                    textTracks: [
                        { mode: 'showing', language: 'en' },
                        { mode: 'hidden', language: 'es' }
                    ]
                }
            });
        });
        it('Should select by track id', function () {
            vgTrackSelector.selectTrack('es');
            expect(vgTrackSelector.API.getMasterMedia().elem
                .textTracks
                .filter(function (item) { return item.mode === 'showing'; })[0].language).toBe('es');
        });
        it('Should select Off when track id is null', function () {
            vgTrackSelector.selectTrack(null);
            expect(vgTrackSelector.API.getMasterMedia().elem
                .textTracks
                .filter(function (item) { return item.mode === 'showing'; }).length).toBe(0);
        });
    });
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmctdHJhY2stc2VsZWN0b3Iuc3BlYy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInZnLXRyYWNrLXNlbGVjdG9yLnNwZWMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSx5REFBb0Q7QUFDcEQscURBQWlEO0FBR2pELFFBQVEsQ0FBQyx3QkFBd0IsRUFBRTtJQUMvQixJQUFJLGVBQStCLENBQUM7SUFFcEMsNkJBQTZCLEtBQVksRUFBRSxPQUFjLEVBQUUsU0FBaUI7UUFDeEUsSUFBTSxLQUFLLEdBQW9CLEVBQXNCLENBQUM7UUFDckQsS0FBYSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7UUFDakMsS0FBSyxDQUFDLElBQUksR0FBRyxXQUFXLENBQUM7UUFDekIsS0FBSyxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFDcEIsS0FBSyxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7UUFDeEIsS0FBSyxDQUFDLE9BQU8sR0FBRyxTQUFTLENBQUM7UUFDMUIsTUFBTSxDQUFDLEtBQUssQ0FBQztLQUNoQjtJQUVELFVBQVUsQ0FBQztRQUNQLElBQU0sR0FBRyxHQUFjO1lBQ25CLGFBQWEsRUFBRTtnQkFDWCxZQUFZLEVBQUUsVUFBQyxJQUFJO29CQUNmLE1BQU0sQ0FBQyxJQUFJLENBQUM7aUJBQ2Y7YUFDSjtTQUNKLENBQUM7UUFDRixlQUFlLEdBQUcsSUFBSSxtQ0FBZSxDQUFDLEdBQUcsRUFBRSxJQUFJLGNBQUssRUFBRSxDQUFDLENBQUM7S0FDM0QsQ0FBQyxDQUFDO0lBRUgsUUFBUSxDQUFDLGVBQWUsRUFBRTtRQUN0QixVQUFVLENBQUM7WUFDUCxlQUFlLENBQUMsR0FBRyxDQUFDLGNBQWMsR0FBRztnQkFDakMsTUFBTSxDQUFDLEVBQUMsSUFBSSxFQUFFO3dCQUNWLFFBQVEsRUFBRTs0QkFDTixtQkFBbUIsQ0FBQyxTQUFTLEVBQUUsSUFBSSxFQUFFLEtBQUssQ0FBQzs0QkFDM0MsbUJBQW1CLENBQUMsU0FBUyxFQUFFLElBQUks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RTtZQUMxQyxlQUFlLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ2xDLE1BQU0sQ0FDRCxlQUFlLENBQUMsR0FBRyxDQUFDLGNBQWMsRUFBRSxDQUFDLElBQVk7aUJBQzdDLFVBQVU7aUJBQ1YsTUFBTSxDQUNILFVBQUMsSUFBSSxJQUFHLE9BQUEsSUFBSSxDQUFDLElBQUksS0FBRyxTQUFTLEVBQXJCLENBQXFCLENBQ2hDLENBQUMsTUFBTSxDQUNmLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQ2IsQ0FBQyxDQUFDO0tBQ04sQ0FBQyxDQUFDO0NBQ04sQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtWZ1RyYWNrU2VsZWN0b3J9IGZyb20gXCIuL3ZnLXRyYWNrLXNlbGVjdG9yXCI7XG5pbXBvcnQge1ZnQVBJfSBmcm9tIFwiLi4vLi4vY29yZS9zZXJ2aWNlcy92Zy1hcGlcIjtcbmltcG9ydCB7RWxlbWVudFJlZn0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcblxuZGVzY3JpYmUoJ1RyYWNrIFNlbGVjdG9yIGNvbnRyb2wnLCAoKSA9PiB7XG4gICAgbGV0IHZnVHJhY2tTZWxlY3RvcjpWZ1RyYWNrU2VsZWN0b3I7XG5cbiAgICBmdW5jdGlvbiBjcmVhdGVTdWJ0aXRsZVRyYWNrKGxhYmVsOnN0cmluZywgc3JjbGFuZzpzdHJpbmcsIGlzRGVmYXVsdDpib29sZWFuKSB7XG4gICAgICAgIGNvbnN0IHRyYWNrOkhUTUxUcmFja0VsZW1lbnQgPSB7fSBhcyBIVE1MVHJhY2tFbGVtZW50O1xuICAgICAgICAodHJhY2sgYXMgYW55KS50YWdOYW1lID0gJ1RSQUNLJztcbiAgICAgICAgdHJhY2sua2luZCA9ICdzdWJ0aXRsZXMnO1xuICAgICAgICB0cmFjay5sYWJlbCA9IGxhYmVsO1xuICAgICAgICB0cmFjay5zcmNsYW5nID0gc3JjbGFuZztcbiAgICAgICAgdHJhY2suZGVmYXVsdCA9IGlzRGVmYXVsdDtcbiAgICAgICAgcmV0dXJuIHRyYWNrO1xuICAgIH1cblxuICAgIGJlZm9yZUVhY2goKCkgPT4ge1xuICAgICAgICBjb25zdCByZWY6RWxlbWVudFJlZiA9IHtcbiAgICAgICAgICAgIG5hdGl2ZUVsZW1lbnQ6IHtcbiAgICAgICAgICAgICAgICBnZXRBdHRyaWJ1dGU6IChuYW1lKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBuYW1lO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgdmdUcmFja1NlbGVjdG9yID0gbmV3IFZnVHJhY2tTZWxlY3RvcihyZWYsIG5ldyBWZ0FQSSgpKTtcbiAgICB9KTtcblxuICAgIGRlc2NyaWJlKCdvblBsYXllclJlYWR5JywgKCkgPT4ge1xuICAgICAgICBiZWZvcmVFYWNoKCgpID0+IHtcbiAgICAgICAgICAgIHZnVHJhY2tTZWxlY3Rvci5BUEkuZ2V0TWFzdGVyTWVkaWEgPSAoKSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHtlbGVtOiB7XG4gICAgICAgICAgICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICBjcmVhdGVTdWJ0aXRsZVRyYWNrKCdFbmdsaXNoJywgJ2VuJywgZmFsc2UpLFxuICAgICAgICAgICAgICAgICAgICAgICAgY3JlYXRlU3VidGl0bGVUcmFjaygnRXNwYcOxb2wnLCAnZXMnLCB0cnVlKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHt9IGFzIEhUTUxUcmFja0VsZW1lbnQsXG4gICAgICAgICAgICAgICAgICAgICAgICB7fSBhcyBIVE1MVHJhY2tFbGVtZW50LFxuICAgICAgICAgICAgICAgICAgICAgICAge30gYXMgSFRNTFRyYWNrRWxlbWVudFxuICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgfX0gYXMgYW55O1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfSk7XG4gICAgICAgIGl0KCdTaG91bGQgc2hvdyBzdWJ0aXRsZXMgdHJhY2tzIG9ubHknLCAoKT0+IHtcbiAgICAgICAgICAgIHZnVHJhY2tTZWxlY3Rvci5vblBsYXllclJlYWR5KCk7XG4gICAgICAgICAgICBleHBlY3QodmdUcmFja1NlbGVjdG9yLnRyYWNrcy5sZW5ndGgpLnRvQmUoMyk7Ly8gMiBzdWJzICsgJ09mZidcbiAgICAgICAgfSk7XG4gICAgICAgIGl0KCdTaG91bGQgc2V0IHRoZSBzZWxlY3RlZCBvcHRpb24nLCAoKT0+IHtcbiAgICAgICAgICAgIHZnVHJhY2tTZWxlY3Rvci5vblBsYXllclJlYWR5KCk7XG4gICAgICAgICAgICBleHBlY3QodmdUcmFja1NlbGVjdG9yLnRyYWNrcy5maWx0ZXIoaXRlbT0+aXRlbS5zZWxlY3RlZD09PXRydWUpWzBdLmxhYmVsKS50b0JlKCdFc3Bhw7FvbCcpO1xuICAgICAgICB9KTtcbiAgICAgICAgaXQoJ1Nob3VsZCBoYXZlIGFuIE9mZiBvcHRpb24nLCAoKT0+IHtcbiAgICAgICAgICAgIHZnVHJhY2tTZWxlY3Rvci5vblBsYXllclJlYWR5KCk7XG4gICAgICAgICAgICBleHBlY3QodmdUcmFja1NlbGVjdG9yLnRyYWNrcy5maWx0ZXIoaXRlbT0+aXRlbS5sYWJlbD09PSdPZmYnKS5sZW5ndGgpLnRvQmUoMSk7XG4gICAgICAgIH0pO1xuICAgICAgICBpdCgnU2hvdWxkIHNldCBPZmYgb3B0aW9uIGFzIHNlbGVjdGVkIHdoZW4gdGhlcmUgaXMgbm8gZGVmYXVsdCB0cmFjaycsICgpPT4ge1xuICAgICAgICAgICAgdmdUcmFja1NlbGVjdG9yLkFQSS5nZXRNYXN0ZXJNZWRpYSA9ICgpID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4ge2VsZW06IHtcbiAgICAgICAgICAgICAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNyZWF0ZVN1YnRpdGxlVHJhY2soJ0VuZ2xpc2gnLCAnZW4nLCBmYWxzZSksXG4gICAgICAgICAgICAgICAgICAgICAgICBjcmVhdGVTdWJ0aXRsZVRyYWNrKCdFc3Bhw7FvbCcsICdlcycsIGZhbHNlKVxuICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgfX0gYXMgYW55O1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHZnVHJhY2tTZWxlY3Rvci5vblBsYXllclJlYWR5KCk7XG4gICAgICAgICAgICBleHBlY3QodmdUcmFja1NlbGVjdG9yLnRyYWNrcy5maWx0ZXIoaXRlbT0+aXRlbS5zZWxlY3RlZD09PXRydWUpWzBdLmxhYmVsKS50b0JlKCdPZmYnKTtcbiAgICAgICAgfSk7XG4gICAgfSk7XG4gICAgXG4gICAgZGVzY3JpYmUoJ3NlbGVjdFRyYWNrJywgKCkgPT4ge1xuICAgICAgICBiZWZvcmVFYWNoKCgpID0+IHtcbiAgICAgICAgICAgIHNweU9uKHZnVHJhY2tTZWxlY3Rvci5BUEksICdnZXRNYXN0ZXJNZWRpYScpLmFuZC5yZXR1cm5WYWx1ZSh7XG4gICAgICAgICAgICAgICAgZWxlbToge1xuICAgICAgICAgICAgICAgICAgICB0ZXh0VHJhY2tzOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICB7bW9kZTogJ3Nob3dpbmcnLCBsYW5ndWFnZTogJ2VuJ30sXG4gICAgICAgICAgICAgICAgICAgICAgICB7bW9kZTogJ2hpZGRlbicsIGxhbmd1YWdlOiAnZXMnfVxuICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgICAgICBpdCgnU2hvdWxkIHNlbGVjdCBieSB0cmFjayBpZCcsICgpPT4ge1xuICAgICAgICAgICAgdmdUcmFja1NlbGVjdG9yLnNlbGVjdFRyYWNrKCdlcycpO1xuICAgICAgICAgICAgZXhwZWN0KFxuICAgICAgICAgICAgICAgICh2Z1RyYWNrU2VsZWN0b3IuQVBJLmdldE1hc3Rlck1lZGlhKCkuZWxlbSBhcyBhbnkpXG4gICAgICAgICAgICAgICAgICAgIC50ZXh0VHJhY2tzXG4gICAgICAgICAgICAgICAgICAgIC5maWx0ZXIoXG4gICAgICAgICAgICAgICAgICAgICAgICAoaXRlbSk9Pml0ZW0ubW9kZT09PSdzaG93aW5nJ1xuICAgICAgICAgICAgICAgICAgICApWzBdLmxhbmd1YWdlXG4gICAgICAgICAgICApLnRvQmUoJ2VzJyk7XG4gICAgICAgIH0pO1xuICAgICAgICBpdCgnU2hvdWxkIHNlbGVjdCBPZmYgd2hlbiB0cmFjayBpZCBpcyBudWxsJywgKCk9PiB7XG4gICAgICAgICAgICB2Z1RyYWNrU2VsZWN0b3Iuc2VsZWN0VHJhY2sobnVsbCk7XG4gICAgICAgICAgICBleHBlY3QoXG4gICAgICAgICAgICAgICAgKHZnVHJhY2tTZWxlY3Rvci5BUEkuZ2V0TWFzdGVyTWVkaWEoKS5lbGVtIGFzIGFueSlcbiAgICAgICAgICAgICAgICAgICAgLnRleHRUcmFja3NcbiAgICAgICAgICAgICAgICAgICAgLmZpbHRlcihcbiAgICAgICAgICAgICAgICAgICAgICAgIChpdGVtKT0+aXRlbS5tb2RlPT09J3Nob3dpbmcnXG4gICAgICAgICAgICAgICAgICAgICkubGVuZ3RoXG4gICAgICAgICAgICApLnRvQmUoMCk7XG4gICAgICAgIH0pO1xuICAgIH0pO1xufSk7XG4iXX0=