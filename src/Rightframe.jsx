import AdminProfile from "./R_frame/AdminProfile";
import AdminInfo from "./R_frame/AdminInfo";
import CoursesOffered from "./R_frame/Courses";
import LastWorked from "./R_frame/LastWorked";
import Participants from "./R_frame/Participants";
import RecentBadge from "./R_frame/RecentBadge";
import TotalBadge from "./R_frame/TotalBadge";


function LocalAdmins()
{
    return (
        <div class="right-frame-container">
            <AdminProfile style="local-admin-profile"/>
                <AdminInfo/>
                <div class="right-grid-container">
                    <TotalBadge/>
                    <RecentBadge/>
                    <Participants/>
                    <LastWorked/>
                </div>
            <CoursesOffered/>
        </div>
    );
}

export default LocalAdmins;