const Welcome = () => import('~/pages/welcome').then(m => m.default || m)
const Login = () => import('~/pages/auth/login').then(m => m.default || m)
const Register = () => import('~/pages/auth/register').then(m => m.default || m)
const PasswordEmail = () => import('~/pages/auth/password/email').then(m => m.default || m)
const PasswordReset = () => import('~/pages/auth/password/reset').then(m => m.default || m)
const NotFound = () => import('~/pages/errors/404').then(m => m.default || m)

const Home = () => import('~/pages/home').then(m => m.default || m)
const Settings = () => import('~/pages/settings/index').then(m => m.default || m)
const SettingsProfile = () => import('~/pages/settings/profile').then(m => m.default || m)
const SettingsPassword = () => import('~/pages/settings/password').then(m => m.default || m)

const Professors = () => import('~/pages/professors/ProfessorsIndex').then(m => m.default || m)
const CreateProfessors = () => import('~/pages/professors/ProfessorsCreate').then(m => m.default || m)
const EditProfessors = () => import('~/pages/professors/ProfessorsEdit').then(m => m.default || m)

const Students = () => import('~/pages/students/StudentsIndex').then(m => m.default || m)
const CreateStudents = () => import('~/pages/students/StudentsCreate').then(m => m.default || m)
const EditStudents = () => import('~/pages/students/StudentsEdit').then(m => m.default || m)

const Courses = () => import('~/pages/courses/CoursesIndex').then(m => m.default || m)
const CreateCourses = () => import('~/pages/courses/CoursesCreate').then(m => m.default || m)
const EditCourses = () => import('~/pages/courses/CoursesEdit').then(m => m.default || m)

export default [
  { path: '/', name: 'welcome', component: Home },

  { path: '/login', name: 'login', component: Login },
  { path: '/register', name: 'register', component: Register },
  { path: '/password/reset', name: 'password.request', component: PasswordEmail },
  { path: '/password/reset/:token', name: 'password.reset', component: PasswordReset },

  { path: '/home', name: 'home', component: Home },
  { path: '/settings',
    component: Settings,
    children: [
      { path: '', redirect: { name: 'settings.profile' } },
      { path: 'profile', name: 'settings.profile', component: SettingsProfile },
      { path: 'password', name: 'settings.password', component: SettingsPassword }
    ] },
  { path: '/professors', name: 'professors', component: Professors },
  { path: '/professors/create', name: 'createProfessor', component: CreateProfessors },
  { path: '/professors/edit', name: 'editProfessor', component: EditProfessors },
  { path: '/students', name: 'students', component: Students },
  { path: '/students/create', name: 'createStudent', component: CreateStudents },
  { path: '/students/edit', name: 'editStudent', component: EditStudents },
  { path: '/courses', name: 'courses', component: Courses },
  { path: '/courses/create', name: 'createCourse', component: CreateCourses },
  { path: '/courses/edit', name: 'editCourse', component: EditCourses },
  { path: '*', component: NotFound }
]
