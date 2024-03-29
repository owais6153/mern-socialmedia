import { Images } from "config/images";
import { Fragment } from "react";
import NotificationListItem from "views/components/screenComponents/settings/notifications/notificationsListItem";

const { emailUsIcon, callUsIcon } = Images;
const notificationArray = [
  {
    key: 'push_',
    label: "Push Notifications",
    description: ``,
    buttonContent: {
      icon: emailUsIcon,
      text: "Email Us",
    },
  },
  {
    key: 'email_',
    label: "Email Notifications",
    description: ``,
    buttonContent: {
      icon: callUsIcon,
      text: "Call Us",
    },
  },
];
const Notifications = () => {
  return (
    <Fragment>
      <div className="py-4">
        <div className="mx-auto xl:grid xl:grid-cols-7 px-3 sm:px-6 lg:gap-8 lg:px-8">
          <div className="col-span-5">
            <div>
              <div className="xl:space-y-0 space-y-10">
                <aside className="xl:hidden"></aside>
                <div className="bg-white px-4 rounded-2xl min-h-screen">
                  <div className="pb-5 pt-10 flex w-full justify-between items-center flex-wrap">
                    <div>
                      <span className="text-[#2A2A2A] font-openSans_bold text-[24px]">
                        Notifications
                      </span>
                    </div>
                  </div>
                  <div className="h-1 bg-c_FD6769 w-full rounded-full"></div>
                  <div className="py-10 space-y-5 divide-y divide-[#E6F4F6]">
                    {notificationArray?.map((item, index) => (
                      <NotificationListItem key={index} item={item} />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <aside className="hidden xl:block col-span-2"></aside>
        </div>
      </div>
    </Fragment>
  );
};

export default Notifications;
