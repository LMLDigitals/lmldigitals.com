import { NextResponse } from 'next/server'
import { isAuthorized } from '@/lib/user'
import { deleteRole } from '@/lib/role'
import { revalidatePath } from 'next/cache'

export async function DELETE(
  req: Request,
  { params }: { params: { id: string } }
) {
  if (!(await isAuthorized(['admin']))) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const { id } = params

  try {
    await deleteRole(id)
    revalidatePath('/dashboard/manage-roles')
    return NextResponse.json({ message: 'Role deleted successfully' })
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to delete role' },
      { status: 500 }
    )
  }
}

