"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Observable_1 = require("rxjs/Observable");
var vg_cue_points_1 = require("./vg-cue-points");
require("rxjs/add/observable/fromEvent");
describe('Cue points', function () {
    var cuePoints;
    var ref;
    beforeEach(function () {
        ref = {
            nativeElement: document.createElement('div')
        };
        cuePoints = new vg_cue_points_1.VgCuePoints(ref);
    });
    it('Should handle onLoad event', function () {
        spyOn(Observable_1.Observable, 'fromEvent').and.callThrough();
        cuePoints.ngOnInit();
        expect(Observable_1.Observable.fromEvent).toHaveBeenCalledWith(ref.nativeElement, 'load');
    });
    xit('Should handle onLoad event', function () {
        spyOn(Observable_1.Observable, 'fromEvent').and.callThrough();
        var event = {
            target: document.createElement('video')
        };
        var track = event.target.addTextTrack('captions', 'test');
        var cue = track.addCue(new TextTrackCue(1, 2, 'cue 1')); // Illegal Constructor
        cuePoints.onLoad(event);
        expect(Observable_1.Observable.fromEvent).toHaveBeenCalledWith(cue, 'enter');
        expect(Observable_1.Observable.fromEvent).toHaveBeenCalledWith(cue, 'exit');
        expect(Observable_1.Observable.fromEvent).toHaveBeenCalledTimes(8);
    });
    it('Should handle onEnter event', function () {
        spyOn(cuePoints.onEnterCuePoint, 'next').and.callThrough();
        var event = {
            target: {}
        };
        cuePoints.onEnter(event);
        expect(cuePoints.onEnterCuePoint.next).toHaveBeenCalledWith(event.target);
    });
    it('Should handle onExit event', function () {
        spyOn(cuePoints.onExitCuePoint, 'next').and.callThrough();
        var event = {
            target: {}
        };
        cuePoints.onExit(event);
        expect(cuePoints.onExitCuePoint.next).toHaveBeenCalledWith(event.target);
    });
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmctY3VlLXBvaW50cy5zcGVjLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsidmctY3VlLXBvaW50cy5zcGVjLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQ0EsOENBQTZDO0FBQzdDLGlEQUE4QztBQUU5Qyx5Q0FBdUM7QUFFdkMsUUFBUSxDQUFDLFlBQVksRUFBRTtJQUNuQixJQUFJLFNBQXNCLENBQUM7SUFDM0IsSUFBSSxHQUFlLENBQUM7SUFFcEIsVUFBVSxDQUFDO1FBQ1AsR0FBRyxHQUFHO1lBQ0YsYUFBYSxFQUFFLFFBQVEsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDO1NBQy9DLENBQUM7UUFFRixTQUFTLEdBQUcsSUFBSSwyQkFBVyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0tBQ3BDLENBQUMsQ0FBQztJQUVILEVBQUUsQ0FBQyw0QkFBNEIsRUFBRTtRQUM3QixLQUFLLENBQUMsdUJBQVUsRUFBRSxXQUFXLENBQUMsQ0FBQyxHQUFHLENBQUMsV0FBVyxFQUFFLENBQUM7UUFFakQsU0FBUyxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBRXJCLE1BQU0sQ0FBQyx1QkFBVSxDQUFDLFNBQVMsQ0FBQyxDQUFDLG9CQUFvQixDQUFDLEdBQUcsQ0FBQyxhQUFhLEVBQUUsTUFBTSxDQUFDLENBQUM7S0FDaEYsQ0FBQyxDQUFDO0lBRUgsR0FBRyxDQUFDLDRCQUE0QixFQUFFO1FBQzlCLEtBQUssQ0FBQyx1QkFBVSxFQUFFLFdBQVcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUVqRCxJQUFJLEtBQUssR0FBRztZQUNSLE1BQU0sRUFBRSxRQUFRLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQztTQUMxQyxDQUFDO1FBRUYsSUFBSSxLQUFLLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsVUFBVSxFQUFFLE1BQU0sQ0FBQyxDQUFDO1FBQzFELElBQUksR0FBRyxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUMsSUFBSSxZQUFZLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxPQUFPLENBQUMsQ0FBQyxDQUFDO1FBRXhELFNBQVMsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7UUFFeEIsTUFBTSxDQUFDLHVCQUFVLENBQUMsU0FBUyxDQUFDLENBQUMsb0JBQW9CLENBQUMsR0FBRyxFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBQ2hFLE1BQU0sQ0FBQyx1QkFBVSxDQUFDLFNBQVMsQ0FBQyxDQUFDLG9CQUFvQixDQUFDLEdBQUcsRUFBRSxNQUFNLENBQUMsQ0FBQztRQUMvRCxNQUFNLENBQUMsdUJBQVUsQ0FBQyxTQUFTLENBQUMsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDLENBQUMsQ0FBQztLQUN6RCxDQUFDLENBQUM7SUFFSCxFQUFFLENBQUMsNkJBQTZCLEVBQUU7UUFDOUIsS0FBSyxDQUFDLFNBQVMsQ0FBQyxlQUFlLEVBQUUsTUFBTSxDQUFDLENBQUMsR0FBRyxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBRTNELElBQUksS0FBSyxHQUFHO1lBQ1IsTUFBTSxFQUFFLEVBQUU7U0FDYixDQUFDO1FBRUYsU0FBUyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUV6QixNQUFNLENBQUMsU0FBUyxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxvQkFBb0IsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUM7S0FDN0UsQ0FBQyxDQUFDO0lBRUgsRUFBRSxDQUFDLDRCQUE0QixFQUFFO1FBQzdCLEtBQUssQ0FBQyxTQUFTLENBQUMsY0FBYyxFQUFFLE1BQU0sQ0FBQyxDQUFDLEdBQUcsQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUUxRCxJQUFJLEtBQUssR0FBRztZQUNSLE1BQU0sRUFBRSxFQUFFO1NBQ2IsQ0FBQztRQUVGLFNBQVMsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7UUFFeEIsTUFBTSxDQUFDLFNBQVMsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLENBQUMsb0JBQW9CLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0tBQzVFLENBQUMsQ0FBQztDQUNOLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEVsZW1lbnRSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzL09ic2VydmFibGUnO1xuaW1wb3J0IHsgVmdDdWVQb2ludHMgfSBmcm9tICcuL3ZnLWN1ZS1wb2ludHMnO1xuXG5pbXBvcnQgJ3J4anMvYWRkL29ic2VydmFibGUvZnJvbUV2ZW50JztcblxuZGVzY3JpYmUoJ0N1ZSBwb2ludHMnLCAoKSA9PiB7XG4gICAgbGV0IGN1ZVBvaW50czogVmdDdWVQb2ludHM7XG4gICAgbGV0IHJlZjogRWxlbWVudFJlZjtcblxuICAgIGJlZm9yZUVhY2goKCkgPT4ge1xuICAgICAgICByZWYgPSB7XG4gICAgICAgICAgICBuYXRpdmVFbGVtZW50OiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgICB9O1xuXG4gICAgICAgIGN1ZVBvaW50cyA9IG5ldyBWZ0N1ZVBvaW50cyhyZWYpO1xuICAgIH0pO1xuXG4gICAgaXQoJ1Nob3VsZCBoYW5kbGUgb25Mb2FkIGV2ZW50JywgKCkgPT4ge1xuICAgICAgICBzcHlPbihPYnNlcnZhYmxlLCAnZnJvbUV2ZW50JykuYW5kLmNhbGxUaHJvdWdoKCk7XG5cbiAgICAgICAgY3VlUG9pbnRzLm5nT25Jbml0KCk7XG5cbiAgICAgICAgZXhwZWN0KE9ic2VydmFibGUuZnJvbUV2ZW50KS50b0hhdmVCZWVuQ2FsbGVkV2l0aChyZWYubmF0aXZlRWxlbWVudCwgJ2xvYWQnKTtcbiAgICB9KTtcblxuICAgIHhpdCgnU2hvdWxkIGhhbmRsZSBvbkxvYWQgZXZlbnQnLCAoKSA9PiB7XG4gICAgICAgIHNweU9uKE9ic2VydmFibGUsICdmcm9tRXZlbnQnKS5hbmQuY2FsbFRocm91Z2goKTtcblxuICAgICAgICBsZXQgZXZlbnQgPSB7XG4gICAgICAgICAgICB0YXJnZXQ6IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3ZpZGVvJylcbiAgICAgICAgfTtcblxuICAgICAgICBsZXQgdHJhY2sgPSBldmVudC50YXJnZXQuYWRkVGV4dFRyYWNrKCdjYXB0aW9ucycsICd0ZXN0Jyk7XG4gICAgICAgIGxldCBjdWUgPSB0cmFjay5hZGRDdWUobmV3IFRleHRUcmFja0N1ZSgxLCAyLCAnY3VlIDEnKSk7IC8vIElsbGVnYWwgQ29uc3RydWN0b3JcblxuICAgICAgICBjdWVQb2ludHMub25Mb2FkKGV2ZW50KTtcblxuICAgICAgICBleHBlY3QoT2JzZXJ2YWJsZS5mcm9tRXZlbnQpLnRvSGF2ZUJlZW5DYWxsZWRXaXRoKGN1ZSwgJ2VudGVyJyk7XG4gICAgICAgIGV4cGVjdChPYnNlcnZhYmxlLmZyb21FdmVudCkudG9IYXZlQmVlbkNhbGxlZFdpdGgoY3VlLCAnZXhpdCcpO1xuICAgICAgICBleHBlY3QoT2JzZXJ2YWJsZS5mcm9tRXZlbnQpLnRvSGF2ZUJlZW5DYWxsZWRUaW1lcyg4KTtcbiAgICB9KTtcblxuICAgIGl0KCdTaG91bGQgaGFuZGxlIG9uRW50ZXIgZXZlbnQnLCAoKSA9PiB7XG4gICAgICAgIHNweU9uKGN1ZVBvaW50cy5vbkVudGVyQ3VlUG9pbnQsICduZXh0JykuYW5kLmNhbGxUaHJvdWdoKCk7XG5cbiAgICAgICAgbGV0IGV2ZW50ID0ge1xuICAgICAgICAgICAgdGFyZ2V0OiB7fVxuICAgICAgICB9O1xuXG4gICAgICAgIGN1ZVBvaW50cy5vbkVudGVyKGV2ZW50KTtcblxuICAgICAgICBleHBlY3QoY3VlUG9pbnRzLm9uRW50ZXJDdWVQb2ludC5uZXh0KS50b0hhdmVCZWVuQ2FsbGVkV2l0aChldmVudC50YXJnZXQpO1xuICAgIH0pO1xuXG4gICAgaXQoJ1Nob3VsZCBoYW5kbGUgb25FeGl0IGV2ZW50JywgKCkgPT4ge1xuICAgICAgICBzcHlPbihjdWVQb2ludHMub25FeGl0Q3VlUG9pbnQsICduZXh0JykuYW5kLmNhbGxUaHJvdWdoKCk7XG5cbiAgICAgICAgbGV0IGV2ZW50ID0ge1xuICAgICAgICAgICAgdGFyZ2V0OiB7fVxuICAgICAgICB9O1xuXG4gICAgICAgIGN1ZVBvaW50cy5vbkV4aXQoZXZlbnQpO1xuXG4gICAgICAgIGV4cGVjdChjdWVQb2ludHMub25FeGl0Q3VlUG9pbnQubmV4dCkudG9IYXZlQmVlbkNhbGxlZFdpdGgoZXZlbnQudGFyZ2V0KTtcbiAgICB9KTtcbn0pO1xuIl19