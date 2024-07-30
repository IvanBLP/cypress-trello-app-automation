import * as fs from 'fs';


interface RenameFileOptions {
	oldPath: string;
	newPath: string;
}

const tasks = {
	renameFile({ oldPath, newPath }: RenameFileOptions): Promise<null> {
		return new Promise((resolve, reject) => {
			fs.rename(oldPath, newPath, (err: any) => {
				if (err) return reject(err);
				resolve(null)
			})
		})
	}
}

export default tasks;