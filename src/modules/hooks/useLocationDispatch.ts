import { useEffect } from "react";
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
   const dispatch = useAppDispatch();
   const bandHero = useAppSelector((state) => state.getHeroBand);
   const bandAbout = useAppSelector((state) => state.getAboutBand);
   const bandTeam = useAppSelector((state) => state.getOurTeam);
   const bandCollab = useAppSelector((state) => state.getCollaborations);
   const bandPartners = useAppSelector((state) => state.getOurClients);
   const bandAlbum = useAppSelector((state) => state.getAboutBand);
   const studioHero = useAppSelector((state) => state.getHeroStudio);
   const studioAbout = useAppSelector((state) => state.getCoolStudioVideo);
   const studioCourses = useAppSelector((state) => state.getCourses);
   const studioTeachers = useAppSelector((state) => state.getTeachers);
   const studioTestimonial = useAppSelector((state) => state.getStudentReviwes);
   const studioStudents = useAppSelector((state) => state.getStudentSuccess);
   const studioAlbum = useAppSelector((state) => state.getStudioAlbum);
   const contacts = useAppSelector((state) => state.getContacts);

   useEffect(() => {
      !bandHero.getLoading && dispatch(getHeroBand());
      !studioHero.getLoading && dispatch(getHeroStudio());
      !bandAlbum.getLoading && dispatch(getBandAlbum());
      !bandAbout.getLoading && dispatch(getAboutBand());
      !bandTeam.getLoading && dispatch(getOurTeam());
      !bandCollab.getLoading && dispatch(getCollaborations());
      !bandPartners.getLoading && dispatch(getClients());
      !contacts.getLoading && dispatch(getContacts());
      !studioCourses.getLoading && dispatch(getCourses());
      !studioAlbum.getLoading && dispatch(getStudioAlbum());
      !studioAbout.getLoading && dispatch(getCoolStudio());
      !studioCourses.getLoading && dispatch(getCourses());
      !studioTeachers.getLoading && dispatch(getTeachers());
      !studioTestimonial.getLoading && dispatch(getStudentSuccess());
      !studioStudents.getLoading && dispatch(getStudentReviwes());
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, []);
};

export default useLocationDispatch;
