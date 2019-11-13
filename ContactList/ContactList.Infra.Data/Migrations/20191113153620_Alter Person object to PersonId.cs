using Microsoft.EntityFrameworkCore.Migrations;

namespace ContactList.Infra.Data.Migrations
{
    public partial class AlterPersonobjecttoPersonId : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<long>(
                name: "PersonId",
                table: "Phone",
                nullable: false,
                oldClrType: typeof(long),
                oldType: "bigint",
                oldNullable: true);

            migrationBuilder.AlterColumn<long>(
                name: "PersonId",
                table: "Email",
                nullable: false,
                oldClrType: typeof(long),
                oldType: "bigint",
                oldNullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<long>(
                name: "PersonId",
                table: "Phone",
                type: "bigint",
                nullable: true,
                oldClrType: typeof(long));

            migrationBuilder.AlterColumn<long>(
                name: "PersonId",
                table: "Email",
                type: "bigint",
                nullable: true,
                oldClrType: typeof(long));
        }
    }
}
