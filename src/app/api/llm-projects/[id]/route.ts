import { NextRequest, NextResponse } from 'next/server'
import { supabase, type UpdateLlmTxtProject } from '../../../../../lib/supabase'

interface RouteParams {
  params: {
    id: string
  }
}

// GET - 获取单个项目
export async function GET(request: NextRequest, { params }: RouteParams) {
  try {
    const { data, error } = await supabase
      .from('public_llm_txt_projects')
      .select('*')
      .eq('id', params.id)
      .single()

    if (error) {
      if (error.code === 'PGRST116') { // No rows found
        return NextResponse.json(
          { error: 'Project not found' },
          { status: 404 }
        )
      }
      return NextResponse.json({ error: error.message }, { status: 500 })
    }

    return NextResponse.json({ data })
  } catch (error) {
    console.error('Error fetching project:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

// PUT - 更新项目（仅管理员）
export async function PUT(request: NextRequest, { params }: RouteParams) {
  try {
    const body: UpdateLlmTxtProject = await request.json()

    // 验证 URL 格式（如果提供）
    if (body.website) {
      try {
        new URL(body.website)
      } catch {
        return NextResponse.json(
          { error: 'Invalid website URL format' },
          { status: 400 }
        )
      }
    }

    if (body.llms_txt) {
      try {
        new URL(body.llms_txt)
      } catch {
        return NextResponse.json(
          { error: 'Invalid llms_txt URL format' },
          { status: 400 }
        )
      }
    }

    if (body.llms_full_txt) {
      try {
        new URL(body.llms_full_txt)
      } catch {
        return NextResponse.json(
          { error: 'Invalid llms_full_txt URL format' },
          { status: 400 }
        )
      }
    }

    const { data, error } = await supabase
      .from('llm_txt_projects')
      .update(body)
      .eq('id', params.id)
      .select()
      .single()

    if (error) {
      if (error.code === 'PGRST116') { // No rows found
        return NextResponse.json(
          { error: 'Project not found' },
          { status: 404 }
        )
      }
      if (error.code === '23505') { // Unique constraint violation
        return NextResponse.json(
          { error: 'A project with this name already exists' },
          { status: 409 }
        )
      }
      return NextResponse.json({ error: error.message }, { status: 500 })
    }

    return NextResponse.json({ data })
  } catch (error) {
    console.error('Error updating project:', error)
    return NextResponse.json(
      { error: 'Invalid JSON or internal server error' },
      { status: 500 }
    )
  }
}

// DELETE - 删除项目（仅管理员）
export async function DELETE(request: NextRequest, { params }: RouteParams) {
  try {
    const { error } = await supabase
      .from('llm_txt_projects')
      .delete()
      .eq('id', params.id)

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 })
    }

    return NextResponse.json({ message: 'Project deleted successfully' })
  } catch (error) {
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}