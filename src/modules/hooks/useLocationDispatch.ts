import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import {
   /* band */
   getHeroBand,
   getAboutBand,
   getBandAlbum,
   getOurTeam,
   getCollaborations,
   getClients,
   /* studio */
   getHeroStudio,
   getCoolStudio,
   getTeachers,
   getStudentReviwes,
   getStudioAlbum,
   getCourses,
   getStudentSuccess,
   /* contacts */
   getContacts,
} from "../../store/thunkCollection";

const useLocationDispatch = () => {
   const navigate = useNavigate();
   const { pathname } = useLocation();
   const dispatch = useAppDispatch();
   // band states
   const bandHero = useAppSelector((state) => state.getHeroBand);
   const bandAbout = useAppSelector((state) => state.getAboutBand);
   const bandTeam = useAppSelector((state) => state.getOurTeam);
   const bandCollab = useAppSelector((state) => state.getCollaborations);
   const bandPartners = useAppSelector((state) => state.getOurClients);
   const bandAlbum = useAppSelector((state) => state.getAboutBand);
   // studio states
   const studioHero = useAppSelector((state) => state.getHeroStudio);
   const studioAbout = useAppSelector((state) => state.getCoolStudioVideo);
   const studioCourses = useAppSelector((state) => state.getCourses);
   const studioTeachers = useAppSelector((state) => state.getTeachers);
   const studioTestimonial = useAppSelector((state) => state.getStudentReviwes);
   const studioStudents = useAppSelector((state) => state.getStudentSuccess);
   const studioAlbum = useAppSelector((state) => state.getStudioAlbum);
   // contact State
   const contacts = useAppSelector((state) => state.getContacts);

   // initial page load

   //after page loaded
   useEffect(() => {
      !bandHero.getLoading && dispatch(getHeroBand());
      !studioHero.getLoading && dispatch(getHeroStudio());
      !bandAlbum.getLoading && dispatch(getBandAlbum());
      !studioCourses.getLoading && dispatch(getCourses());

      !contacts.getLoading && dispatch(getContacts());
   }, [
      pathname,
      contacts.getLoading,
      dispatch,
      bandHero.getLoading,
      studioHero.getLoading,
      navigate,
      bandAlbum.getLoading,
      studioCourses.getLoading,
   ]);

   // after Studio Page loaded
   useEffect(() => {
      if (pathname === "/studio") {
         !studioAbout.getLoading && dispatch(getCoolStudio());
         // !studioCourses.getLoading && dispatch(getCourses());
         !studioTeachers.getLoading && dispatch(getTeachers());
         !studioTestimonial.getLoading && dispatch(getStudentSuccess());
         !studioStudents.getLoading && dispatch(getStudentReviwes());
         !studioAlbum.getLoading && dispatch(getStudioAlbum());
      }
   }, [
      navigate,
      dispatch,
      pathname,
      studioAlbum.getLoading,
      studioAbout.getLoading,
      // studioCourses.getLoading,
      studioTeachers.getLoading,
      studioTestimonial.getLoading,
      studioStudents.getLoading,
   ]);

   // after Band Page loaded
   useEffect(() => {
      if (pathname === "/") {
         !bandAbout.getLoading && dispatch(getAboutBand());
         !bandTeam.getLoading && dispatch(getOurTeam());
         !bandCollab.getLoading && dispatch(getCollaborations());
         !bandPartners.getLoading && dispatch(getClients());
         // !studioCourses.getLoading && dispatch(getCourses());
      }
   }, [
      navigate,
      dispatch,
      pathname,
      bandAlbum.getLoading,
      bandAbout.getLoading,
      bandTeam.getLoading,
      bandCollab.getLoading,
      bandPartners.getLoading,
      // studioCourses.getLoading,
   ]);
};

export default useLocationDispatch;
/* 
useEffect(() => {
      if (!bandHero.getLoading && pathname === "/") {
         dispatch(getHeroBand());
      }
      if (!contacts.getLoading && pathname === "/") {
         dispatch(getContacts());
      }
      if (!studioHero.getLoading && pathname === "/studio") {
         dispatch(getHeroStudio());
      }
      if (!studioAbout.getLoading && pathname === "/studio") {
         dispatch(getCoolStudio());
      }
      if (!studioCourses.getLoading && pathname === "/studio") {
         dispatch(getCourses());
      }
      if (!studioTeachers.getLoading && pathname === "/studio") {
         dispatch(getTeachers());
      }
      if (!studioTestimonial.getLoading && pathname === "/studio") {
         dispatch(getStudentSuccess());
      }
      if (!studioStudents.getLoading && pathname === "/studio") {
         dispatch(getStudentReviwes());
      }
      if (!studioAlbum.getLoading && (pathname === "/studio" || pathname === "/studio/gallery")) {
         dispatch(getStudioAlbum());
      }
      if (!bandAbout.getLoading && pathname === "/") {
         dispatch(getAboutBand());
      }
      if (!bandTeam.getLoading && pathname === "/") {
         dispatch(getOurTeam());
      }
      if (!bandCollab.getLoading && pathname === "/") {
         dispatch(getCollaborations());
      }
      if (!bandPartners.getLoading && pathname === "/") {
         dispatch(getClients());
      }
      if (!studioCourses.getLoading && pathname === "/") {
         dispatch(getCourses());
      }
      if (!bandAlbum.getLoading && pathname === "/gallery") {
         dispatch(getBandAlbum());
      }
   }, [
      dispatch,
      pathname,
      bandHero.getLoading,
      bandAbout.getLoading,
      bandTeam.getLoading,
      bandCollab.getLoading,
      bandPartners.getLoading,
      studioHero.getLoading,
      studioAbout.getLoading,
      studioCourses.getLoading,
      studioTeachers.getLoading,
      studioTestimonial.getLoading,
      studioStudents.getLoading,
      studioAlbum.getLoading,
      contacts.getLoading,
      bandAlbum.getLoading,
   ]);
};
*/
