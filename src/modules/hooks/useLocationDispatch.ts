import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import {
   /* band */
   getHeroBand,
   getAboutBand,
   getOurTeam,
   getCollaborations,
   getClients,
   /* studio */
   getHeroStudio,
   getCoolStudio,
   getTeachers,
   getStudentReviwes,
   getCourses,
   getStudentSuccess,
   /* contacts */
   getContacts,
} from "../../store/thunkCollection";

const useLocationDispatch = () => {
   const { pathname } = useLocation();
   const dispatch = useAppDispatch();
   // band states
   const bandHero = useAppSelector((state) => state.getHeroBand);
   const bandAbout = useAppSelector((state) => state.getAboutBand);
   const bandTeam = useAppSelector((state) => state.getOurTeam);
   const bandCollab = useAppSelector((state) => state.getCollaborations);
   const bandPartners = useAppSelector((state) => state.getOurClients);
   // studio states
   const studioHero = useAppSelector((state) => state.getHeroStudio);
   const studioAbout = useAppSelector((state) => state.getCoolStudioVideo);
   const studioCourses = useAppSelector((state) => state.getCourses);
   const studioTeachers = useAppSelector((state) => state.getTeachers);
   const studioTestimonial = useAppSelector((state) => state.getStudentReviwes);
   const studioStudents = useAppSelector((state) => state.getStudentSuccess);
   // contact State
   const contacts = useAppSelector((state) => state.getContacts);
   // gallery States
   // const bandGalleryAlbums = useAppSelector((state) => state);
   // const studioGalleryAlbums = useAppSelector((state) => state);
   // const bandAlbumPhotos = useAppSelector((state) => state);
   // const studioAlbumPhotos = useAppSelector((state) => state);
   useEffect(() => {
      !contacts.getLoading && dispatch(getContacts());
   }, [pathname, contacts.getLoading, dispatch]);

   useEffect(() => {
      // on Studio Page
      if (pathname === "/studio") {
         !studioHero.getLoading && dispatch(getHeroStudio());
         !studioAbout.getLoading && dispatch(getCoolStudio());
         !studioCourses.getLoading && dispatch(getCourses());
         !studioTeachers.getLoading && dispatch(getTeachers());
         !studioTestimonial.getLoading && dispatch(getStudentSuccess());
         !studioStudents.getLoading && dispatch(getStudentReviwes());
      }
   }, [
      dispatch,
      pathname,
      studioAbout.getLoading,
      studioCourses.getLoading,
      studioTeachers.getLoading,
      studioTestimonial.getLoading,
      studioStudents.getLoading,
      studioHero.getLoading,
   ]);

   useEffect(() => {
      // on band page
      if (pathname === "/") {
         !bandHero.getLoading && dispatch(getHeroBand());
         !bandAbout.getLoading && dispatch(getAboutBand());
         !bandTeam.getLoading && dispatch(getOurTeam());
         !bandCollab.getLoading && dispatch(getCollaborations());
         !bandPartners.getLoading && dispatch(getClients());
      }
   }, [
      dispatch,
      pathname,
      bandAbout.getLoading,
      bandHero.getLoading,
      bandTeam.getLoading,
      bandCollab.getLoading,
      bandPartners.getLoading,
   ]);
};

export default useLocationDispatch;
