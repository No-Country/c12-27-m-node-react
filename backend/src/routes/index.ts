import { Router } from 'express';
import { readdirSync } from 'fs';

const PATH_ROUTER = `${__dirname}`;

const router = Router();
/**
 *
 * @returns
 */

const cleanFileName = (fileName: string): string | undefined => {
  const file = fileName;
  return file;
};

readdirSync(PATH_ROUTER).filter((fileName) => {
  const cleanName = cleanFileName(fileName);

  if (cleanName !== 'index.ts') {
    console.log(`Route... /${cleanName?.split('.').shift()}`);
    import(`./${cleanName}`).then((moduleRouter) => {
      router.use(`/${cleanName?.split('.').shift()}`, moduleRouter.router);
    });
  }
});

export { router };
